import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Singleitem } from "./projectsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleItem = props => {
  const [hover, setHover] = useState(false);
  const hoverIcon = useSpring({
    transform: hover ? "scale(1.2)" : "scale(1)"
  });

  return (
    <Singleitem style={props.style}>
      <FontAwesomeIcon
        id="close"
        icon={["fas", "grip-horizontal"]}
        onClick={props.close}
      />
      <div id="si-project-title">{props.selectedItem.name}</div>
      <div id="item-info">
        <img
          id="si-thumbnail"
          src={props.selectedItem.thumbnail}
          alt={props.selectedItem.name}
        />

        <div id="si-rightside">
          <div id="si-itemtext">{props.selectedItem.description}</div>
          <div id="si-concepts">UTILIZES: {props.selectedItem.concepts}</div>
          <div id="si-links">
            <animated.a
              id="si-github"
              href={props.selectedItem.github}
              style={hoverIcon}
            >
              <FontAwesomeIcon
                id="si-github-icon"
                icon={["fab", "github"]}
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
              href={props.selectedItem.codepenUrl}
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
    </Singleitem>
  );
};

export default SingleItem;
