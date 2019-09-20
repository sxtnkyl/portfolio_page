import { animated } from "react-spring";
import styled from "styled-components";

const LeftNavDrawer = styled(animated.nav)`
  overflow: hidden;
  background: #0b2133;
  color: #e6e8ea;
  box-shadow: 2px 0px 7px #b5bcc1;
  position: fixed;
  z-index: 151;
  height: 100vh;
  width: 30vw;
  min-width: 300px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 992px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 600px) {
    width: 70vw;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 20%;
  background: none;
  display: flex;

  .name-title {
    flex: 1 1 50%;
    background: none;
    text-align: right;
    padding-right: 7%;
    h1 {
      font-family: Roboto;
      font-size: 2.1em;
      font-stretch: expanded;
      font-style: italic;
      letter-spacing: 0.2px;
      font-weight: 900;
      line-height: 1em;
      color: #ff7808;
      @media (max-width: 1360px) {
        font-size: 1.7em;
      }
    }
    h6 {
      font-family: Lato;
      font-size: 0.8em;
      font-style: none;
      font-weight: 700;
      line-height: 0;
      letter-spacing: -0.6px;
      @media (max-width: 1360px) {
        font-size: 0.7em;
      }
    }
  }
`;

const NavItemList = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 10%;
  background: none;
  #navitem {
    background-color: none;
    text-align: left;
    text-indent: 10%;
    height: 20%;
    line-height: 10vh;
    position: relative;
    text-decoration: none;
    font-size: 1em;
    font-stretch: expanded;
    font-style: italic;
    letter-spacing: 0.2px;
    font-weight: 900;
    box-shadow: 0px 0px 2px #0b2133;
    a:link {
      transition: text-indent 0.35s ease-out 0.1s, color 0.35s ease-out 0.15s;
      color: #e6e8ea;
      .navicon {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        transition: background-color 0.75s ease-out 0.1s;
      }
      .navicon:hover {
        background-color: #ff7808;
      }
    }
    a:visited {
      color: #e6e8ea;
    }
    a:hover {
      text-indent: 30%;
      color: #0b2133;
    }
  }
`;

const Bottom = styled.div`
  background: none;
  height: 10%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .boticon a {
    opacity: 0.85;
    color: #859099;
    padding: 7px;
    border-radius: 50px;
    transition: background-color 0.5s ease-out, color 0.5s ease-out;
  }
  .boticon a:link {
    text-decoration: none;
    color: #859099;
  }
  .boticon a:visited {
    color: #859099;
  }
  .boticon a:hover {
    color: #0b2133;
    background-color: #e6e8ea;
  }
`;

export { LeftNavDrawer, Top, NavItemList, Bottom };
