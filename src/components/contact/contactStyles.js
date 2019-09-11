import { animated } from "react-spring";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  widows: 100vw;
  background: #f7f8f8;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled(animated.div)`
  width: 100vw;
  background: #f7f8f8;
`;

const Title = styled(animated.h1)`
  position: relative;
  height: 10%;
  top: 0%;
  margin: 0;
`;
const Square = styled(animated.div)`
  width: 100%;
  height: 10vh;
  background: #0b2133;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Triangle = styled(animated.div)`
  width: 0;
  height: 0;
  border-left: 50vw solid transparent;
  border-right: 50vw solid transparent;
  border-top: 20vh solid #0b2133;
`;

const ContactInfo = styled(animated.div)`
  width: 80%;
  height: 55vh;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;
const ContactIcon = styled(animated.div)`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  a {
    background: #859099;
    box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
    color: #0b2133;
    transition: background-color 0.25s ease;
    border-radius: 50%;
    cursor: pointer;
  }
  a:link {
    text-decoration: none;
    background: #0b2133;
  }
  a:visited {
    background: #0b2133;
  }
  a:hover {
    color: #0b2133;
    background-color: #f7f8f8;
  }
  #info {
    color: #0b2133;
    #reveal {
      overflow: hidden;
    }
  }
`;

const BottomSquare = styled(animated.div)`
  width: 100vw;
  height: 10vh;
  background: #0b2133;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12vw;
`;

const BotIcon = styled(animated.div)`
  a {
    opacity: 0.85;
    color: #859099;
    padding: 7px;
    margin: auto 7px;
    border-radius: 50px;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
  }
  a:link {
    text-decoration: none;
    color: #859099;
  }
  a:visited {
    color: #859099;
  }
  a:hover {
    color: #859099;
    background-color: #e6e8ea;
  }
`;

const ToTopArrow = styled(animated.div)`
  height: 30px;
  width: 30px;
  background: #ff7808;
  border-radius: 50px;
  display: flex;
  align-content: center;
  justify-content: center;
  .totopclass {
    background: ;
    padding-top: 3px;
    height: 24px;
    width: 24px;
    cursor: pointer;
    color: #0b2133;
  }
`;

export {
  Section,
  Header,
  Title,
  Square,
  Triangle,
  ContactInfo,
  ContactIcon,
  BottomSquare,
  BotIcon,
  ToTopArrow
};
