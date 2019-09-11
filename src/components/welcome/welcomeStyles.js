import { animated } from "react-spring";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  z-index: 50;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Welcometext = styled.div`
  width: 50%;
  background: none;
  color: #e6e8ea;
  text-align: center;
  font-family: Lato;
  font-size: 1.7em;
  font-stretch: expanded;
  font-style: italic;
  letter-spacing: 0.8px;
  font-weight: 900;
  padding-bottom: 3%;
`;

const BtnContainer = styled.div`
  width: 15%;
  height: 7%;
  background: none;
  border: 3px solid #e6e8ea;
  text-align: center;
  a:link {
    text-decoration: none;
  }
  a:visited {
    color: #e6e8ea;
  }
`;

const ViewWork = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: none;
  font-family: Lato;
  font-size: 1em;
  font-stretch: expanded;
  letter-spacing: 0.8px;
  font-weight: 600;
  line-height: 2.2em;
  :hover {
    color: #0b2133;
  }
`;

const ViewWorkBtn = styled(animated.span)`
  width: 0%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: #ff7808;
`;

export { Section, Welcometext, BtnContainer, ViewWork, ViewWorkBtn };
