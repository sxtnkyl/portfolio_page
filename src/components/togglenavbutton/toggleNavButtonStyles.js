import { animated } from "react-spring";
import styled from "styled-components";

const ToggleNavContainer = styled(animated.div)`
  position: fixed;
  top: 92vh;
  left: 1.5vw;
  width: 30px;
  height: 30px;
  z-index: 140;
  background: #ff7808;
  border-radius: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
  .togglenavbutton {
    padding-top: 4px;
    width: 22px;
    height: 22px;
    cursor: pointer;
    color: #0b2133;
  }
  .togglenavbutton:focus {
    outline: none;
  }
`;

export { ToggleNavContainer };
