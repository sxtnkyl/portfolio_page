import { animated } from "react-spring";
import styled from "styled-components";

const Section = styled.section`
  background: linear-gradient(
    180deg,
    rgba(247, 248, 248, 1) 60%,
    rgba(11, 33, 51, 1) 90%
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(animated.h1)`
  position: relative;
  height: 10%;
  top: 0%;
  margin: 0;
`;

const Grid = styled(animated.div)`
  position: relative;
  height: 80%;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

//goes in Grid; addhover effect
const Item = styled(animated.div)`
  position: relative;
  height: 80%;
  width: 80%;
`;
//content and wrapper made for single hover effect
const Itemcontent = styled(animated.div)`
  height: 100%;
  width: 100%;
`;

const Content = styled(animated.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 2px;
`;

const Singleitem = styled(animated.div)`
  position: absolute;
  width: 80%;
  height: 80%;
  background: #f7f8f8;
  border-radius: 2px;
  box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.75);
  will-change: transform, opacity;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export { Section, Title, Grid, Item, Itemcontent, Content, Singleitem };
