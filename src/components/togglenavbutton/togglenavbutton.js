import React, { useState } from "react";
import { useSpring, config } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToggleNavContainer } from "./toggleNavButtonStyles";

const Togglenavbutton = props => {
  const [hover, setHover] = useState(false);

  const togglenavHover = useSpring({
    transform: hover ? "scale(1.2)" : "scale(1)",
    boxShadow: hover
      ? "0px 0px 0px -1px rgba(0, 0, 0, 0.75)"
      : "0px 0px 10px -1px rgba(0, 0, 0, 0.75)",
    config: config.wobbly
  });

  return (
    <ToggleNavContainer style={togglenavHover}>
      <FontAwesomeIcon
        className="togglenavbutton"
        icon={["fas", "bars"]}
        size="2x"
        onMouseEnter={e => {
          setHover(true);
        }}
        onMouseLeave={e => {
          setHover(false);
        }}
        onClick={props.click}
      />
    </ToggleNavContainer>
  );
};

export default Togglenavbutton;
