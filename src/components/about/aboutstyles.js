import { animated } from "react-spring";
import styled from "styled-components";

// Section flex container
const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;
  background: linear-gradient(
    0deg,
    rgba(247, 248, 248, 1) 60%,
    rgba(11, 33, 51, 1) 90%
  );
`;

//Section flex item 1of2
const Title = styled.h1`
  flex: 1 1 10%;
  text-align: center;
  align-self: flex-start;
  margin-left: 10%;
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

//Section flex item 2of2
// Slider flex container
// *****position must be absolute for proper transition animation
const Slider = styled(animated.div)`
  height: 80%;
  flex: 1 1 80%;
  position: absolute;
  will-change: transform, opacity, scale;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  @media (max-width: 1450px) {
    font-size: 0.9em;
  }
  @media (max-width: 1300px) {
    font-size: 0.8em;
  }
  @media (max-width: 992px) {
    font-size: 0.7em;
  }
  @media (max-width: 768px) {
    font-size: 0.6em;
    flex-direction: column;
    margin-top: 3%;
  }
  @media (max-width: 600px) {
    font-size: 0.5em;
  }
  &#skillsSlide {
    @media (max-width: 768px) {
      font-size: 0.6em;
      flex-direction: column-reverse;
      margin-top: 3%;
    }
    @media (max-width: 600px) {
      font-size: 0.5em;
    }
  }
`;

//Slider flex item 1of2
const Left = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  #portrait {
    width: 50%;
    margin-left: 10%;
    box-shadow: -5px 5px 16px -1px rgba(0, 0, 0, 0.75);
    border: solid 2px #0b2133;
    border-radius: 2px;
    background: #b5bcc1;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }

  #mySkills {
    width: 80%;
    margin-top: 10%;
    text-align: center;
    line-height: 1.5em;
    font-size: 0.8em;
    font-weight: 600;
    color: #0b2133;
    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
  #resumeLinkandArrow {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    #resumeLink {
      width: 40%;
      padding: 5px 5px;
      text-align: center;
      line-height: 2.5em;
      font-size: 0.8em;
      font-weight: 600;
      color: #0b2133;
      cursor: pointer;
      background: #ff7808;
      filter: drop-shadow(1px 1px 2px #b5bcc1) drop-shadow(3px 3px #0b2133);
      border: solid 2px #0b2133;
      border-radius: 2px;
      transition: filter 0.25s ease;
    }
    #resumeLink:active,
    #resumeLink:visited,
    #resumeLink:link {
      text-decoration: none;
      color: #0b2133;
    }
    #resumeLink:hover {
      filter: drop-shadow(1px 1px 2px #f7f8f8);
    }
    #backArrow {
      cursor: pointer;
      color: #ff7808;
      filter: drop-shadow(1px 1px 2px #b5bcc1) drop-shadow(3px 3px #0b2133);
      transition: filter 0.25s ease;
      @media (max-width: 768px) {
      }
    }
    #backArrow:hover {
      filter: drop-shadow(1px 1px 2px #f7f8f8);
    }
  }
`;

//Slider flex item 2of2
const Right = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  #thisIsMe {
    width: 80%;
  }
  #myStory {
    width: 80%;
    text-align: center;
    line-height: 1.5em;
    font-size: 0.8em;
    font-weight: 600;
    color: #0b2133;
  }
  #toSkillsButton {
    width: 40%;
    margin-bottom: 10%;
    padding: 5px 5px;
    text-align: center;
    font-size: 0.8em;
    font-weight: 600;
    color: #0b2133;
    cursor: pointer;
    background: #ff7808;
    filter: drop-shadow(1px 1px 2px #b5bcc1) drop-shadow(3px 3px #0b2133);
    border: solid 2px #0b2133;
    border-radius: 2px;
    transition: filter 0.25s ease;
    @media (max-width: 600px) {
      margin-bottom: 0;
      margin-top: 3%;
    }
  }
  #toSkillsButton:hover {
    filter: drop-shadow(1px 1px 2px #f7f8f8);
  }

  #experienceTable {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 768px) {
      align-items: center;
    }
    #skillsSelectorButtons {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 10%;
      width: 100%;
      @media (max-width: 768px) {
        height: 50%;
        width: 80%;
      }
      .active {
        background: #ff7808 !important;
      }
      .btn {
        cursor: pointer;
        padding: 5px 5px;
        color: #0b2133;
        background: #f7f8f8;
        text-align: center;
        font-size: 0.8em;
        font-weight: 600;
        border: solid 2px #0b2133;
        border-radius: 2px;
      }
    }
    #skillsList {
      box-shadow: 0px 0px 7px -1px rgba(0, 0, 0, 0.75);
      height: 60%;
      width: 80%;
      margin-bottom: 15%;
      align-self: center;
      overflow: hidden;
      display: grid;
      grid-template-columns: repeat(3, minmax(25px, 1fr));
      grid-template-rows: auto;
      justify-items: center;
      @media (max-width: 768px) {
        margin-bottom: 0;
        height: 100%;
        width: 50%;
        padding: 5px;
        grid-template-columns: 50% 50%;
        grid-template-rows: repeat(4, minmax(20px, 1fr));
      }
      @media (max-width: 600px) {
        margin-bottom: 0;
        height: 80%;
        width: 50%;
        padding: 5px;
        grid-template-columns: 50% 50%;
        grid-template-rows: repeat(4, minmax(20px, 1fr));
      }
    }
    #tc {
      height: 20%;
      transition: all 0.25s ease;
      border-radius: 2px;
      font-size: 0.8em;
      font-weight: 600;
      color: #0b2133;
      padding: 2px;
      place-self: center;
      @media (max-width: 768px) {
        font-size: 0.7em;
        justify-self: center;
        place-self: center;
      }
    }
    #tc:hover {
      filter: drop-shadow(1px 1px 2px #f7f8f8);
      background: #b5bcc1;
    }
  }
`;

export { Section, Title, Slider, Left, Right };
