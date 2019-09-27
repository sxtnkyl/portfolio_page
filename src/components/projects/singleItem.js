import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Singleitem } from "./projectsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleItem = props => {
  const {
    name,
    thumbnail,
    description,
    concepts,
    githubUrl,
    codepenUrl
  } = props.selectedItem;

  const [hovergit, git] = useState(false);
  const hoverGit = useSpring({
    transform: hovergit && githubUrl ? "scale(1.2)" : "scale(1)",
    color: hovergit && !githubUrl ? "#b5bcc1" : "#0b2133",
    cursor: githubUrl ? "pointer" : "not-allowed"
  });
  const [hoverpen, pen] = useState(false);
  const hoverPen = useSpring({
    transform: hoverpen && codepenUrl ? "scale(1.2)" : "scale(1)",
    color: hoverpen && !codepenUrl ? "#b5bcc1" : "#0b2133",
    cursor: codepenUrl ? "pointer" : "not-allowed"
  });

  return (
    <Singleitem style={props.style}>
      <FontAwesomeIcon
        id="close"
        icon={["fas", "grip-horizontal"]}
        onClick={props.close}
      />
      <div id="si-project-title">{name}</div>
      <div id="item-info">
        <img id="si-thumbnail" src={thumbnail} alt={name} />

        <div id="si-rightside">
          <div id="si-itemtext">{description}</div>
          <div id="si-concepts">UTILIZES: {concepts}</div>
          <div id="si-links">
            <animated.a
              id="si-github"
              href={githubUrl ? githubUrl : "#projects"}
              target={githubUrl ? "_blank" : "_self"}
              rel="noopener noreferrer"
              style={hoverGit}
            >
              <FontAwesomeIcon
                id="si-github-icon"
                icon={["fab", "github"]}
                onMouseEnter={e => {
                  git(true);
                }}
                onMouseLeave={e => {
                  git(false);
                }}
              />
            </animated.a>
            <animated.a
              id="si-codepen"
              href={codepenUrl ? codepenUrl : "#projects"}
              target={codepenUrl ? "_blank" : "_self"}
              rel="noopener noreferrer"
              style={hoverPen}
            >
              <FontAwesomeIcon
                id="si-codepen-icon"
                icon={["fab", "codepen"]}
                onMouseEnter={e => {
                  pen(true);
                }}
                onMouseLeave={e => {
                  pen(false);
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
