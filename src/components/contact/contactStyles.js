import { animated } from "react-spring";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: #f7f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    height: 120vh;
  }
  @media (max-width: 600px) {
    height: 125vh;
  }
`;

const Title = styled(animated.div)`
  width: 100%;
  height: 15vh;
  background: #0b2133;
  border: 2px solid #0b2133;
  padding-left: 10%;
  font-size: 2.4em;
  line-height: 2.4em;
  font-family: Lato;
  font-stretch: expanded;
  font-style: italic;
  font-weight: 900;
  letter-spacing: 0.8px;
  color: #ff7808;
  text-shadow: 1px 1px 1px #0b2133;
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
  @media (max-width: 600px) {
    padding-left: 0;
    text-align: center;
  }
`;

//http://apps.eky.hk/css-triangle-generator/
const Triangle = styled(animated.div)`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 20vh 49.5vw 0 49.5vw;
  border-color: #0b2133 transparent transparent transparent;
`;

const ContactInfo = styled(animated.div)`
  margin-top: auto;
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ContactIcon = styled(animated.div)`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  a {
    width: auto;
    background: #859099;
    box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
    color: #0b2133;
    transition: background-color 0.25s ease;
    border-radius: 50%;
    cursor: pointer;
  }
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    background: #0b2133;
    color: #0b2133;
  }
  a:hover {
    background-color: #f7f8f8;
  }
  #info {
    width: 100%;
    color: #0b2133;
    #phone,
    #email {
      font-family: Lato;
      font-stretch: expanded;
      font-weight: 900;
      font-size: 1.8em;
      letter-spacing: 0.8px;
      @media (max-width: 768px) {
        font-size: 1em;
      }
      @media (max-width: 600px) {
        font-size: 0.7em;
      }
    }
    #reveal {
      width: auto;
      overflow: hidden;
      @media (max-width: 600px) {
        font-size: 0.7em;
      }
      #highlight {
        font-family: Lato;
        font-stretch: expanded;
        font-style: italic;
        font-weight: 900;
        letter-spacing: 0.8px;
        color: #ff7808;
        text-shadow: 1px 1px 1px #0b2133;
        @media (max-width: 768px) {
          font-size: 1em;
        }
        @media (max-width: 600px) {
          font-size: 0.8em;
        }
      }
    }
  }
`;

const BottomBar = styled(animated.div)`
  margin-top: auto;
  height: 11%;
  width: 100%;
  background: #0b2133;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const BotIcon = styled(animated.div)`
  flex: 1 1 1;
  a {
    opacity: 0.85;
    color: #859099;
    padding: 10px;
    border-radius: 50px;
    transition: background-color 0.5s ease-out, color 0.5s ease-out,
      opacity 0.5s ease-out;
  }
  a:link {
    text-decoration: none;
    color: #859099;
  }
  a:visited {
    color: #859099;
  }
  a:hover {
    color: #0b2133;
    background-color: #e6e8ea;
    opacity: 1;
  }
`;

export {
  Section,
  Title,
  Triangle,
  ContactInfo,
  ContactIcon,
  BottomBar,
  BotIcon
};
