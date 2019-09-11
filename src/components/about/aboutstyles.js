import { animated } from "react-spring";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  z-index: 50;
  background: linear-gradient(
    0deg,
    rgba(247, 248, 248, 1) 60%,
    rgba(11, 33, 51, 1) 90%
  );
`;

// background: linear-gradient(
//   175deg,
//   rgba(11, 33, 51, 1) 70%,
//   rgba(181, 188, 193, 1) 80%,
//   rgba(247, 248, 248, 1) 30%
// );
//box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
const Title = styled(animated.h1)`
  width: 20%;
  height: 10%;
  text-align: center;
  background: ;
`;

const Slider = styled(animated.div)`
  width: 100%;
  height: 80%;
  position: absolute;
  display: flex;
  align-self: center;
  will-change: transform, opacity, scale;
  background: ;
`;

const Summary = styled(animated.div)`
  background: ;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Skills = styled(animated.div)`
  background: ;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled(animated.div)`
  background: ;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  #portrait {
    height: 80%;
    width: 50%;
    margin-left: 10%;
    box-shadow: -5px 5px 16px -1px rgba(0, 0, 0, 0.75);
    border: solid 1px #0b2133;
    border-radius: 2px;
    background: #b5bcc1;
  }
  #skillsDescription {
    height: 60%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.85em;
    font-weight: 600;
    color: #0b2133;
    #mySkills {
      height: 60%;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 0.9em;
      font-weight: 600;
      color: #0b2133;
      #resumeLink {
        margin-top: 5%;
        padding: 5px 5px;
        cursor: pointer;
        text-decoration: none;
        background: #ff7808;
        filter: drop-shadow(1px 1px 2px #b5bcc1) drop-shadow(3px 3px #0b2133);
        border: solid 1px #0b2133;
        border-radius: 2px;
        transition: filter 0.25s ease;
      }
      #resumeLink:active,
      #resumeLink:visited,
      #resumeLink:link {
        color: #0b2133;
      }
      #resumeLink:hover {
        filter: drop-shadow(1px 1px 2px #f7f8f8);
      }
      #backArrow {
        margin-top: 5%;
        height: 20%;
        width: auto;
        cursor: pointer;
        color: #ff7808;
        filter: drop-shadow(1px 1px 2px #b5bcc1) drop-shadow(3px 3px #0b2133);
        transition: filter 0.25s ease;
      }
      #backArrow:hover {
        filter: drop-shadow(1px 1px 2px #f7f8f8);
      }
    }
  }
`;

const Right = styled(animated.div)`
  background: ;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  #thisIsMe {
    display: flex;
    height: 20%;
    width: 80%;
    background: ;
    #meArrow {
      height: 100%;
      width: 50%;
      color: #ff7808;
      filter: drop-shadow(1px 1px 2px #b5bcc1) drop-shadow(3px 3px #0b2133);
    }
    #meText {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  #myStory {
    height: 60%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.9em;
    font-weight: 600;
    color: #0b2133;
    span {
      margin-top: 5%;
      padding: 5px 5px;
      cursor: pointer;
      background: #ff7808;
      filter: drop-shadow(1px 1px 2px #b5bcc1) drop-shadow(3px 3px #0b2133);
      border: solid 1px #0b2133;
      border-radius: 2px;
      transition: filter 0.25s ease;
    }
    span:hover {
      filter: drop-shadow(1px 1px 2px #f7f8f8);
    }
  }
  #experienceTable {
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    #skillsSelectorButtons {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 15%;
      width: 100%;
      .active {
        background: #ff7808 !important;
      }
      .btn {
        cursor: pointer;
        padding: 5px 5px;
        color: #0b2133;
        background: #f7f8f8;
        text-align: center;
        font-size: 0.9em;
        font-weight: 600;
        border: solid 1px #0b2133;
        border-radius: 2px;
      }
    }
    #skillsList {
      height: 80%;
      overflow: hidden;
      display: grid;
      grid-template-columns: repeat(3, minmax(50px, 1fr));
      grid-template-rows: 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
    }
    #tc {
      height: 20px;
      transition: all 0.25s ease;
      border: solid 1px #f7f8f8;
      border-radius: 2px;
      background: #f7f8f8;
      font-size: 0.9em;
      font-weight: 600;
      box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
      color: #0b2133;
      padding: 2px;
    }
    #tc:hover {
      filter: drop-shadow(1px 1px 2px #f7f8f8);
      background: #b5bcc1;
    }
  }
`;

export { Section, Title, Slider, Summary, Skills, Left, Right };
