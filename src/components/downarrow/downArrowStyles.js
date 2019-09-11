import { animated } from "react-spring";
import styled from "styled-components";

const DownArrowButton = styled(animated.div)`
  position: fixed;
  top: 92vh;
  left: 94.5vw;
  height: 30px;
  width: 30px;
  z-index: 140;
  background: #ff7808;
  border-radius: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
  .downbutton {
    background: ;
    padding-top: 3px;
    height: 24px;
    width: 24px;
    cursor: pointer;
    color: #0b2133;
  }
`;

export { DownArrowButton };
