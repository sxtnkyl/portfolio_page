import React, { useState } from "react";
import { useSpring, config } from "react-spring";
import { ToTopArrow } from "./contactStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToTop = props => {
  const [hover, setHover] = useState(false);

  const backToTopHover = useSpring({
    transform: hover ? "translate3d(0, -4px, 0)" : "translate3d(0, 0px, 0)",
    config: config.wobbly
  });

  return (
    <ToTopArrow style={backToTopHover} onClick={() => window.scrollTo(0, 0)}>
      <FontAwesomeIcon
        className="totopclass"
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

export default ToTop;
