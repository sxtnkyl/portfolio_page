import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
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

  return (
    <Content onClick={props.onClick} style={props.style}>
      <div id="project-title">{item.name}</div>
      <div id="thumbnail-wrapper">
        <div id="card-summary">{item.summary}</div>
        <animated.img
          id="thumbnail"
          src={item.thumbnail}
          style={slideSummary}
        />
        <div
          id="card-peel"
          onMouseEnter={e => {
            setShow(true);
          }}
          onMouseLeave={e => {
            setShow(false);
          }}
        />
      </div>
    </Content>
  );
};

export default Itemcontent;
