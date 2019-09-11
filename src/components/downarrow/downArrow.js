import React, { useState } from "react";
import { useSpring, config } from "react-spring";
import { DownArrowButton } from "./downArrowStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownArrow = props => {
  const [hover, setHover] = useState(false);

  const downArrowHover = useSpring({
    transform: hover ? "translate3d(0, -5px, 0)" : "translate3d(0, 0px, 0)",
    boxShadow: hover
      ? "0px 5px 10px -1px rgba(0, 0, 0, 0.75)"
      : "0px 0px 10px -1px rgba(0, 0, 0, 0.75)",
    config: config.wobbly
  });

  return (
    <DownArrowButton style={downArrowHover} onClick={() => props.click()}>
      <FontAwesomeIcon
        className="downbutton"
        icon={["fas", "chevron-down"]}
        size="2x"
        onMouseEnter={e => {
          setHover(true);
        }}
        onMouseLeave={e => {
          setHover(false);
        }}
      />
    </DownArrowButton>
  );
};

export default DownArrow;
