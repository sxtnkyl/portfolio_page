import { animated } from "react-spring";
import styled from "styled-components";

// Section flex container
const Section = styled.section`
  height: 100vh;
  width: 100%;
  z-index: 50;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//Section flex item 1of2
const Welcometext = styled.div`
  width: 50%;
  background: none;
  color: #e6e8ea;
  text-align: center;
  font-style: italic;
  padding-bottom: 3%;
  font-stretch: expanded;
  font-weight: 900;
  font-size: 1.8em;
  letter-spacing: 0.8px;
  @media (max-width: 992px) {
    font-size: 1.3em;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
  @media (max-width: 600px) {
    font-size: 0.8em;
    width: 80%;
    padding-bottom: 10%;
  }
  #name {
    white-space: no-wrap;
  }
`;

//Section flex item 2of2
const BtnContainer = styled.div`
  width: 15%;
  height: 7%;
  background: none;
  border: 3px solid #e6e8ea;
  text-align: center;
  @media (max-width: 992px) {
    font-size: 1em;
    width: 20%;
    height: auto;
  }
  @media (max-width: 768px) {
    font-size: 0.8em;
    width: 20%;
    height: auto;
  }
  @media (max-width: 600px) {
    font-size: 0.6em;
    width: 40%;
    height: auto;
  }
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: #e6e8ea;
  }
`;

const ViewAbout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: none;
  font-stretch: expanded;
  letter-spacing: 0.8px;
  font-weight: 600;
  line-height: 2.2em;
  &:hover {
    color: #0b2133;
  }
`;

const ViewAboutBtn = styled(animated.span)`
  width: 0%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: #ff7808;
`;

export { Section, Welcometext, BtnContainer, ViewAbout, ViewAboutBtn };
