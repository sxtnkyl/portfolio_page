import React from "react";
import { BackdropDiv } from "./backdropStyles";
import { useSpring, config } from "react-spring";

const Backdrop = props => {
  const backdropSlide = useSpring({
    transform: props.showing
      ? "translate3d(0, 0, 0)"
      : "translate3d(100%, 0, 0)",
    visibility: props.showing ? "visible" : "hidden",
    config: config.slow
  });
  return (
    <BackdropDiv id="backdrop" style={backdropSlide} onClick={props.click} />
  );
};

export default Backdrop;
