import { animated } from "react-spring";
import styled from "styled-components";

//Section flex container
const Section = styled.section`
  background: linear-gradient(
    180deg,
    rgba(247, 248, 248, 1) 60%,
    rgba(11, 33, 51, 1) 90%
  );
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    height: ${props => (props.open ? "auto" : "100vh")};
  }
`;

//Section flex item 1of2
const Title = styled(animated.h1)`
  flex: 1 1 10%;
  font-size: 2.4em;
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
`;

//Section flex item 2of2 (if open)
//holds all the <Item>s
const Grid = styled(animated.div)`
  position: relative;
  flex: 1 1 80%;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-template-rows: 40% 40%;
  grid-gap: 5%;
  @media (max-width: 992px) {
    grid-template-columns: 40% 40%;
    grid-template-rows: repeat(3, minmax(20px, 1fr));
    justify-content: center;
    margin-top: 5%;
    height: auto;
    grid-gap: 3%;
    margin-bottom: 5%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 80%;
    grid-template-rows: repeat(6, minmax(20px, 1fr));
    grid-gap: 0%;
    width: 100%;
  }
`;

//<Itemcontent>....content
//Itemcontent flex container (individial <Grid> item)
const Content = styled(animated.div)`
  place-self: center;
  position: relative;
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border-radius: 2px;
  @media (max-width: 600px) {
    justify-content: center;
  }

  #project-title {
    flex: 1 1 20%;
    font-size: 1.3em;
    color: #0b2133;
    font-stretch: expanded;
    font-weight: 900;
    letter-spacing: 0.8px;
    @media (max-width: 768px) {
      font-size: 1em;
    }
    @media (max-width: 600px) {
      line-height: 1.5em;
      margin-top: 5%;
    }
  }

  #thumbnail-wrapper {
    width: 100%;
    flex: 1 1 80%;
    overflow: hidden;
    border-radius: 2px;
    border: solid 1px #f7f8f8;
    box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
    position: relative;
    #thumbnail {
      width: 100%;
      height: 100%;
      z-index: 51;
      cursor: pointer;
    }
    #card-summary {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #f7f8f8;
      color: #5d646b;
      text-shadow: 0px 0px #b5bcc1;
      font-size: 0.85em;
      letter-spacing: 0.8px;
      font-weight: 900;
      font-style: italic;
      line-height: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #card-peel {
      border-top: 30px solid transparent;
      border-right: 30px solid white;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 53;
      cursor: pointer;
    }
  }
`;

//Section flex item 2of2 (if open is false)
// Singleitem Flex Container
const Singleitem = styled(animated.div)`
  position: absolute;
  width: 80%;
  height: 80%;
  background: #f7f8f8;
  border-radius: 2px;
  box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.75);
  will-change: transform, opacity;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;

  #close {
    position: absolute;
    top: 7%;
    left: 93%;
    padding: 1px 3px;
    border-radius: 3px;
    color: #0b2133;
    font-size: 1.33em;
    cursor: pointer;
    filter: drop-shadow(1px 1px 2px #b5bcc1) drop-shadow(3px 3px #b5bcc1);
    transition: filter 0.25s ease;
    @media (max-width: 992px) {
      left: 90%;
    }
    @media (max-width: 600px) {
      left: 88%;
      top: 2%;
      font-size: 0.9em;
    }
  }

  #close:hover {
    filter: drop-shadow(1px 1px 2px #b5bcc1);
  }

  #si-project-title {
    height: 10%;
    width: 80%;
    font-size: 2.3em;
    text-align: left;
    font-family: Lato;
    font-stretch: expanded;
    font-style: italic;
    font-weight: 900;
    letter-spacing: 0.8px;
    color: #0b2133;
    text-shadow: 1px 1px 1px #0b2133;
    @media (max-width: 1600px) {
      font-size: 2em;
    }
    @media (max-width: 992px) {
      font-size: 1.6em;
    }
    @media (max-width: 600px) {
      text-align: center;
    }
  }

  #item-info {
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 1600px) {
      width: 90%;
    }
    @media (max-width: 992px) {
      flex-direction: column;
    }

    #si-thumbnail {
      border: 1px solid black;
      height: 80%;
      width: 50%;
      border-radius: 7px;
      background: blue;
      align-self: center;
      box-shadow: -5px 5px 16px -1px rgba(0, 0, 0, 0.75);
      @media (max-width: 992px) {
        height: 40%;
        width: 40%;
      }
      @media (max-width: 600px) {
        height: 40%;
        width: 70%;
      }
    }

    #si-rightside {
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-self: center;
      align-items: center;
      #si-itemtext {
        height: 40%;
        width: 90%;
        font-size: 0.85em;
        color: #0b2133;
        text-align: center;
        font-family: Lato;
        font-stretch: expanded;
        letter-spacing: 0.8px;
        font-weight: 900;
        line-height: 1.2em;
        @media (max-width: 1600px) {
          font-size: 0.8em;
        }
        @media (max-width: 1200px) {
          font-size: 0.7em;
        }
        @media (max-width: 992px) {
          font-size: 0.6em;
        }
        @media (max-width: 600px) {
          font-size: 0.4em;
        }
      }

      #si-concepts {
        height: 20%;
        width: 80%;
        font-size: 0.75em;
        color: #5d646b;
        text-shadow: 0px 0px #b5bcc1;
        text-align: center;
        font-family: Lato;
        font-stretch: expanded;
        font-style: italic;
        letter-spacing: 0.8px;
        font-weight: 500;
        @media (max-width: 1600px) {
          font-size: 0.7em;
          height: 15%;
        }
        @media (max-width: 1200px) {
          font-size: 0.6em;
        }
        @media (max-width: 600px) {
          font-size: 0.4em;
        }
      }

      #si-links {
        height: 15%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        @media (max-width: 1600px) {
          height: 10%;
        }
        @media (max-width: 600px) {
          height: 8%;
        }
        #si-github {
          height: 100%;
          width: 25%;
          #si-github-icon {
            height: 100%;
            width: 100%;
            filter: drop-shadow(1px 1px 2px #b5bcc1)
              drop-shadow(3px 3px #b5bcc1);
          }
        }
        #si-codepen {
          height: 100%;
          width: 25%;
          #si-codepen-icon {
            height: 100%;
            width: 100%;
            filter: drop-shadow(1px 1px 2px #b5bcc1)
              drop-shadow(3px 3px #b5bcc1);
          }
        }
      }
    }
  }
`;

export { Section, Title, Grid, Content, Singleitem };
