import { animated } from "react-spring";
import styled from "styled-components";

const ToggleNavContainer = styled(animated.div)`
  position: fixed;
  top: 92vh;
  left: 1.5vw;
  width: 50px;
  height: 50px;
  z-index: 140;
  background: #ff7808;
  border-radius: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
  #togglenavbutton {
    padding-top: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #0b2133;
  }
  #togglenavbutton:focus {
    outline: none;
  }
  @media (max-width: 992px) {
    width: 50px;
    height: 50px;
    #togglenavbutton {
      padding-top: 12px;
      width: 35px;
      height: 35px;
    }
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    left: 3vw;
    #togglenavbutton {
      padding-top: 10px;
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    #togglenavbutton {
      padding-top: 8px;
      width: 20px;
      height: 20px;
    }
  }
`;

export { ToggleNavContainer };
