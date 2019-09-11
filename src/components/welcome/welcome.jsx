import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import {
  Section,
  Welcometext,
  BtnContainer,
  ViewWork,
  ViewWorkBtn
} from "./welcomeStyles";
import { useSpring } from "react-spring";
import useMeasure from "../useMeasure";
import useIntersection from "../intersectionHook";

//https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/
//https://codepen.io/onion2k/pen/RmQVbM
//draws equilateral triangles over canvas, removed by mouseover
const Welcome = forwardRef((props, ref) => {
  const { observerEntry, elRef } = useIntersection({ threshold: 0.01 });
  useImperativeHandle(ref, () => ({
    getVport() {
      return observerEntry;
    }
  }));

  const [hover, setHover] = useState(false);
  const [bind, { width }] = useMeasure();
  const viewWorkHover = useSpring({
    width: hover ? width : 0
  });

  return (
    <Section id="welcome" ref={elRef}>
      <Welcometext>
        Hello my name is <span className="highlight-orange">Kyle Sexton</span>.
        <br />
        Welcome to my portfolio.
      </Welcometext>
      <BtnContainer>
        <a href="#about">
          <ViewWork
            {...bind}
            onMouseEnter={e => {
              setHover(true);
            }}
            onMouseLeave={e => {
              setHover(false);
            }}
          >
            About Me
            <ViewWorkBtn style={viewWorkHover} />
          </ViewWork>
        </a>
      </BtnContainer>
    </Section>
  );
});

/* 
  UPDATED TO USE USEMEASURE AND SPRINGS
  <section id="welcome">
        <div id="welcome-text">
          Hello my name is <span className="highlight">Kyle Sexton</span>.
          <br />
          I'm a full-stack web developer.
        </div>
        <div className="btn-container">
          <a href="#about">
            <div id="viewwork">
              View Work
              <span className="ease" />
            </div>
          </a>
        </div>
      </section> */

export default Welcome;
