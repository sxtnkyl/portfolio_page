import React from "react";
import { LeftNavDrawer, Top, NavItemList, Bottom } from "./leftNavDrawerStyles";
import { useSpring, config } from "react-spring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import the nav items from APP to props to make list
//toggle passed up to App
const Leftnavdrawer = props => {
  const navDrawerSlide = useSpring({
    transform: props.showing
      ? "translate3d(0, 0, 0)"
      : "translate3d(-100%, 0, 0)",
    config: config.slow
  });

  return (
    <LeftNavDrawer style={navDrawerSlide}>
      <Top id="topNav">
        <div className="name-title">
          <h1>Kyle Sexton</h1>
          <h6>Fullstack Web Developer</h6>
        </div>
      </Top>
      <NavItemList>{props.navbarItems}</NavItemList>
      <Bottom>
        <div className="boticon">
          <a href="https://codepen.io/sxtnkyl">
            <FontAwesomeIcon icon={["fab", "codepen"]} size="lg" />
          </a>
        </div>

        <div className="boticon">
          <a href="https://github.com/sxtnkyl">
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </a>
        </div>

        <div className="boticon">
          <a href="https://www.linkedin.com/in/kyle-sexton-52b30468/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
          </a>
        </div>

        <div className="boticon">
          <a href="https://www.freecodecamp.org/fcc5d006f09-3abf-43d3-9afa-8aafdb5b0fdd">
            <FontAwesomeIcon icon={["fab", "free-code-camp"]} size="lg" />
          </a>
        </div>
      </Bottom>
    </LeftNavDrawer>
  );
};

export default Leftnavdrawer;
