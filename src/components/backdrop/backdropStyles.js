import { animated } from "react-spring";
import styled from "styled-components";

const BackdropDiv = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 30vw;
  z-index: 100;
  width: 70vw;
  height: 100%;
  background: #859099;
  opacity: 0.85;
  overflow: hidden;
  cursor: pointer;
`;

export { BackdropDiv };
