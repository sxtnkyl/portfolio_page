import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import { useTransition, useSpring, useChain, animated } from "react-spring";
import { Section, Title, Grid, Item, Singleitem } from "./projectsStyles";
import "./projects.css";
import projects from "./projectData";
import Itemcontent from "./itemContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersection from "../intersectionHook";

const Projects = forwardRef((props, ref) => {
  const { observerEntry, elRef } = useIntersection({ threshold: 0.01 });
  useImperativeHandle(ref, () => ({
    getVport() {
      return observerEntry;
    }
  }));
  //open = all projects showing, closed = selectedItem showing
  const [open, setOpen] = useState(true);

  //hook to hold single project that was selected
  const [selectedItem, setSelectedItem] = useState(projects[0]);
  // useEffect(() => {
  //   console.log(selectedItem);
  // }, [selectedItem]);

  //give our transition animation to each project in projects arr
  const gridRef = useRef();
  const openAllProjects = useTransition(
    open ? projects : [],
    item => item.name,
    {
      ref: gridRef,
      from: { transform: "scale(0)", opacity: 0 },
      enter: { transform: "scale(1)", opacity: 1 },
      leave: { transform: "scale(0)", opacity: 0 }
    }
  );

  //map each projects to the styled compenent Item(in styles), put it in the grid styled component
  const allProjects = openAllProjects.map(
    ({ item, props: gridtransition, key }) => (
      <Item
        key={key}
        id={item.name}
        style={gridtransition}
        onClick={e => {
          setSelectedItem(projects.find(obj => obj.name === item.name));
          setOpen(false);
        }}
      >
        <Itemcontent item={item} />
      </Item>
    )
  );

  //spring for enlarging the selected item
  const selectedItemRef = useRef();
  const singleitemspring = useSpring({
    ref: selectedItemRef,
    transform: open ? "scale(0)" : "scale(1)"
  });

  //spring for scaling up the grid height
  const gridHeightSpring = useRef();
  const gridspring = useSpring({
    ref: gridHeightSpring,
    transform: open ? "scale(1)" : "scale(0)"
  });

  useChain(
    open
      ? [selectedItemRef, gridRef, gridHeightSpring]
      : [gridRef, gridHeightSpring, selectedItemRef],
    [0, open ? 0.75 : 0.75]
  );

  const [hover, setHover] = useState(false);
  const hoverIcon = useSpring({
    transform: hover ? "scale(1.2)" : "scale(1)"
  });

  //what Singleitem component will display
  const singleTileItem = (
    <animated.div id="singleitem-inner">
      <FontAwesomeIcon
        id="close"
        icon={["fas", "grip-horizontal"]}
        size="lg"
        onClick={() => setOpen(true)}
      />
      <div className="highlight-blue" id="si-project-title">
        {selectedItem.name}
      </div>
      <div id="not-title">
        <div id="si-leftside">
          <img id="si-thumbnail" src={selectedItem.thumbnail} />
        </div>
        <div id="si-rightside">
          <div id="si-itemtext">{selectedItem.description}</div>
          <div id="si-concepts">UTILIZES: {selectedItem.concepts}</div>
          <div id="si-links">
            <animated.a
              id="si-github"
              href={selectedItem.github}
              style={hoverIcon}
            >
              <FontAwesomeIcon
                id="si-github-icon"
                icon={["fab", "github"]}
                size="lg"
                onMouseEnter={e => {
                  setHover(true);
                }}
                onMouseLeave={e => {
                  setHover(false);
                }}
              />
            </animated.a>
            <animated.a
              id="si-codepen"
              style={hoverIcon}
              href={selectedItem.codepenUrl}
            >
              <FontAwesomeIcon
                id="si-codepen-icon"
                icon={["fab", "codepen"]}
                size="lg"
                onMouseEnter={e => {
                  setHover(true);
                }}
                onMouseLeave={e => {
                  setHover(false);
                }}
              />
            </animated.a>
          </div>
        </div>
      </div>
    </animated.div>
  );

  const title = open ? "PROJECTS" : null;

  return (
    <Section id="projects" ref={elRef}>
      <Title className="highlight-blue section-title">{title}</Title>
      <Grid style={gridspring}>{allProjects}</Grid>
      <Singleitem style={singleitemspring}>{singleTileItem}</Singleitem>
    </Section>
  );
});

export default Projects;
