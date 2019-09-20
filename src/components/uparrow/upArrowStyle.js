import { animated } from "react-spring";
import styled from "styled-components";

const ToTopArrow = styled(animated.div)`
position: fixed;
top: 2vh;
left: 94.5vw;
height: 50px;
width: 50px;
z-index: 140;
background: #ff7808;
border-radius: 50px;
display: flex;
align-content: center;
justify-content: center;
#upbutton {
  padding-top: 5px;
  height: 45px;
  width: 45px;
  cursor: pointer;
  color: #0b2133;
}
@media (max-width: 992px) {
  width: 50px;
  height: 50px;
  left: 92.5vw;
  #upbutton {
    padding-top: 5px;
    width: 40px;
    height: 40px;
  }
}
@media (max-width: 768px) {
  width: 40px;
  height: 40px;
  left: 90.5vw;
  #upbutton {
    padding-top: 4px;
    width: 35px;
    height: 35px;
  }
}
@media (max-width: 600px) {
  width: 30px;
  height: 30px;
  left: 88.5vw;
  #upbutton {
    padding-top: 3px;
    width: 25px;
    height: 25px;
  }
`;

export { ToTopArrow };
