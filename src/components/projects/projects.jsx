import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import { useTransition, useSpring, useChain } from "react-spring";
import { Section, Title, Grid } from "./projectsStyles";
import projects from "./projectData";
import Itemcontent from "./itemContent";
import SingleItem from "./singleItem";

import useIntersection from "../intersectionHook";

const Projects = forwardRef((props, ref) => {
  const { observerEntry, elRef } = useIntersection({ threshold: 0.01 });
  useImperativeHandle(ref, () => ({
    getVport() {
      return observerEntry;
    }
  }));
  //true = all projects showing, false = showing single selectedItem
  const [open, setOpen] = useState(true);
  function closeSingleItem() {
    setOpen(true);
  }

  //hook to hold single project that was selected
  const [selectedItem, setSelectedItem] = useState(projects[0]);

  //give our transition animation to each project in projects arr
  //this is for shrinking each small item
  const gridRef = useRef();
  const AllProjectsTransition = useTransition(
    open ? projects : [],
    item => item.name,
    {
      ref: gridRef,
      from: { transform: "scale(0)", opacity: 0 },
      enter: { transform: "scale(1)", opacity: 1 },
      leave: { transform: "scale(0)", opacity: 0 }
    }
  );

  //quick fix for scrolling back to projects in viewport > 100vh. smooth out later.
  function scrollup() {
    document.location.href = "#projects";
  }
  //map each project to a styled compenent <Item>, put it in the <Grid> styled component
  //call args as obj to call "props" animation as "gridtransition"
  const allProjects = AllProjectsTransition.map(
    ({ item, props: gridtransition, key }) => (
      <Itemcontent
        key={key}
        id={item.name}
        item={item}
        style={gridtransition}
        onClick={e => {
          setSelectedItem(projects.find(obj => obj.name === item.name));
          setOpen(false);
          scrollup();
        }}
      />
    )
  );

  //spring for enlarging/shrinking the selected item- passed to <SingleItem>
  const selectedItemRef = useRef();
  const singleitemspring = useSpring({
    ref: selectedItemRef,
    transform: open ? "scale(0)" : "scale(1)"
  });

  //spring for scaling up the <Grid> height
  const gridHeightSpring = useRef();
  const gridspring = useSpring({
    ref: gridHeightSpring,
    transform: open ? "scale(1)" : "scale(0)"
  });

  ////*ORDER OF OPERATIONS* grid items shrink, grid shrinks, singleitem grows
  useChain(
    open
      ? [selectedItemRef, gridRef, gridHeightSpring]
      : [gridRef, gridHeightSpring, selectedItemRef],
    [0, open ? 0.75 : 0.75]
  );

  const title = open ? "PROJECTS" : null;

  return (
    <Section id="projects" ref={elRef} open={open}>
      <Title>{title}</Title>
      <Grid style={gridspring}>{allProjects}</Grid>
      <SingleItem
        style={singleitemspring}
        selectedItem={selectedItem}
        close={closeSingleItem}
      />
    </Section>
  );
});

export default Projects;
