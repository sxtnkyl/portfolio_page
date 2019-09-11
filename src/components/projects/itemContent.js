import React, { useState } from "react";
import { useSpring, useTransition, animated, config } from "react-spring";
import "./projects.css";
import { Content } from "./projectsStyles";

const Itemcontent = props => {
  //for hoveritem
  const [showImg, setShow] = useState(false);

  const slideSummary = useSpring({
    transform: showImg
      ? `translate3d(-100%, -100%, 0)`
      : `translate3d(0%, 0%, 0)`
  });

  //passes individual item for hover to locate itself, instead of all mapped items
  const { item } = props;

  // thumbnail wrapper with thumbnail, card cover, card peel

  return (
    <Content>
      <div id="project-title">{item.name}</div>
      <div id="thumbnail-wrapper">
        <div id="card-summary">{item.summary}</div>
        <animated.img
          id="thumbnail"
          src={item.thumbnail}
          style={slideSummary}
        />
      </div>
      <div
        id="card-peel"
        onMouseEnter={e => {
          setShow(true);
        }}
        onMouseLeave={e => {
          setShow(false);
        }}
      />
    </Content>
  );
};

export default Itemcontent;
