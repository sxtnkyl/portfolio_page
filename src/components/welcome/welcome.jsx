import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Section,
  Welcometext,
  BtnContainer,
  ViewAbout,
  ViewAboutBtn
} from "./welcomeStyles";
import { useSpring } from "react-spring";
import Trianglecanvas from "../trianglecanvas/trianglecanvas";
import useMeasure from "../useMeasure";
import useIntersection from "../intersectionHook";

const Welcome = forwardRef((props, ref) => {
  const { observerEntry, elRef } = useIntersection({ threshold: 0.01 });
  useImperativeHandle(ref, () => ({
    getVport() {
      return observerEntry;
    }
  }));

  const [hover, setHover] = useState(false);
  const [bind, { width }] = useMeasure();

  const viewAboutHover = useSpring({
    width: hover ? width : 0
  });

  return (
    <Section id="welcome" ref={elRef}>
      <Trianglecanvas />
      <Welcometext>
        Hello, my name is
        <br />{" "}
        <span className="highlight-orange" id="name">
          Kyle Sexton
        </span>
        .
        <br />
        Welcome to my portfolio.
      </Welcometext>
      <BtnContainer>
        <a href="#about">
          <ViewAbout
            {...bind}
            onMouseEnter={e => {
              setHover(true);
            }}
            onMouseLeave={e => {
              setHover(false);
            }}
          >
            About Me
            <ViewAboutBtn style={viewAboutHover} />
          </ViewAbout>
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
