import React, { useState, forwardRef, useImperativeHandle } from "react";
import { useTransition } from "react-spring";
import { Section, Title, Slider, Left, Right } from "./aboutstyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersection from "../intersectionHook";
import Toolbox from "./toolBox";
import fullstack_resume from "../../images/Kyle_Sexton_fullstack.pdf";
import portrait from "../../images/portrait.PNG";

const About = forwardRef((props, ref) => {
  const { observerEntry, elRef } = useIntersection({ threshold: 0.01 });
  useImperativeHandle(ref, () => ({
    getVport() {
      return observerEntry;
    }
  }));

  //true: about me; false: about my programming exp
  //example: https://codesandbox.io/embed/n9vo1my91p
  //make with springs, add gestures later. use button for temp solution
  const [slide, set] = useState(true);

  const slidetransition = useTransition(slide, null, {
    from: {
      opacity: 0,
      transform: "translate3d(100%, 0,0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)"
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-100%,0,0)"
    }
  });

  const summaryStory = (
    <div id="myStory">
      I am a former geologist looking to mine a new career in web development. I
      graduated from the University of Florida in 2013 where I received my B.S.
      in Geology. This path led me to Atlanta, Georgia where I worked
      specializing in applied geophysics and environmental remediation. After
      five years in the geology industry fate led to a new found passion of
      scripting languages. I instantly knew that my career was about to take an
      unforseen turn down an unfamiliar, but inticing road. Learning JavaScript
      and writing algorithms to create tools for solving problems became a
      seemingly endless and addictive challenge which steered me into web
      development. Within less than one year I have grown from zero coding
      experience to writing full stack applications.
    </div>
  );
  const skillsStory = (
    <div id="mySkills">
      Here is my skill toolbox! You can select and deselect each category to see
      my coding strengths. So far JavaScript has been my go to scripting
      language. Coupled with React, I have become proficient in Front End
      production. I've recently dove head first into the Back End swimming pool,
      compiling a fullstack Url shortener application. I am currently expanding
      my full stack structure knowledge, producing other apps, and working in
      React Native. You can use the button below to view my formal resume or
      continue to the next section to view my projects.
    </div>
  );

  const slideItem = slidetransition.map(({ item, key, props }) =>
    slide ? (
      <Slider id="summarySlide" style={props} key={key}>
        <Left>
          <img id="portrait" src={portrait} alt="portrait" />
        </Left>
        <Right>
          <div className="heavy highlight-orange" id="thisIsMe">
            This is me!
          </div>
          {summaryStory}
          <div id="toSkillsButton" onClick={() => set(!slide)}>
            Come check out my growing toolbox of skills!
          </div>
        </Right>
      </Slider>
    ) : (
      <Slider id="skillsSlide" style={props} key={key}>
        <Left>
          {skillsStory}
          <div id="resumeLinkandArrow">
            <a
              id="resumeLink"
              href={fullstack_resume}
              target="_blank"
              rel="noopener noreferrer"
              alt="resume link"
            >
              Download Kyle's Resume
            </a>
            <FontAwesomeIcon
              id="backArrow"
              size="3x"
              icon={["fas", "reply"]}
              onClick={() => set(!slide)}
            />
          </div>
        </Left>
        <Right>
          <Toolbox />
        </Right>
      </Slider>
    )
  );

  return (
    <Section id="about" ref={elRef}>
      <Title>ABOUT</Title>
      {slideItem}
    </Section>
  );
});

export default About;
