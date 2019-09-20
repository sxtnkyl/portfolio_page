import React, { useState } from "react";
import { useSpring, config } from "react-spring";
import { ToTopArrow } from "./upArrowStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpArrow = () => {
  const [hover, setHover] = useState(false);

  const backToTopHover = useSpring({
    transform: hover ? "translate3d(0, -5px, 0)" : "translate3d(0, 0px, 0)",
    boxShadow: hover
      ? "0px 5px 10px -1px rgba(0, 0, 0, 0.75)"
      : "0px 0px 10px -1px rgba(0, 0, 0, 0.75)",
    config: config.wobbly
  });

  return (
    <ToTopArrow style={backToTopHover} onClick={() => window.scrollTo(0, 0)}>
      <FontAwesomeIcon
        id="upbutton"
        icon={["fas", "chevron-up"]}
        size="2x"
        onMouseEnter={e => {
          setHover(true);
        }}
        onMouseLeave={e => {
          setHover(false);
        }}
      />
    </ToTopArrow>
  );
};

export default UpArrow;
