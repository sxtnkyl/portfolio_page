import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import { useTransition } from "react-spring";
import {
  Section,
  Title,
  Slider,
  Summary,
  Skills,
  Left,
  Right
} from "./aboutstyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersection from "../intersectionHook";
import Toolbox from "./toolBox";
import fullstack_resume from "../../images/Kyle_Sexton_fullstack_resume.docx";
import portrait from "../../images/portrait.PNG";

const About = forwardRef((props, ref) => {
  const { observerEntry, elRef } = useIntersection({ threshold: 0.01 });
  useImperativeHandle(ref, () => ({
    getVport() {
      console.log("about ref called");
      return observerEntry;
    }
  }));

  //true: employment; false: programming
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
      transform: "translate3d(-50%,0,0)"
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
      <span onClick={() => set(!slide)}>
        Come check out my growing toolbox of skills!
      </span>
    </div>
  );
  const skillsStory = (
    <div id="mySkills">
      Here is my skill toolbox! You can select and deselect the category from
      right to see my coding strengths. So far JavaScript has been my go to
      scripting language. Coupled with React, I have become proficient in Front
      End production. I've recently dove head first into the Back End swimming
      pool, compiling a fullstack Url shortener application. I am currently
      expanding my full stack structure knowledge, producing other apps, and
      working in React Native. You can use the button below to view my formal
      resume or continue to the next section to view my projects.
      <a id="resumeLink" href={fullstack_resume} target="_blank">
        Download Kyle's Resume
      </a>
      <FontAwesomeIcon
        id="backArrow"
        icon={["fas", "reply"]}
        onClick={() => set(!slide)}
      />
    </div>
  );

  const summarySlide = (
    <Summary>
      <Left>
        <img id="portrait" src={portrait} />
      </Left>
      <Right>
        <div id="thisIsMe">
          <FontAwesomeIcon
            id="meArrow"
            icon={["fas", "long-arrow-alt-left"]}
            transform="grow-10"
          />
          <div className="heavy highlight-orange" id="meText">
            This is me!
          </div>
        </div>
        <div id="myStory">{summaryStory}</div>
      </Right>
    </Summary>
  );

  const skillsSlide = (
    <Skills>
      <Left>
        <div id="skillsDescription">{skillsStory}</div>
      </Left>
      <Right>
        <Toolbox />
      </Right>
    </Skills>
  );

  const slideItem = slidetransition.map(({ item, key, props }) =>
    slide ? (
      <Slider style={props} key={key}>
        {summarySlide}
      </Slider>
    ) : (
      <Slider style={props} key={key}>
        {skillsSlide}
      </Slider>
    )
  );

  return (
    <Section id="about" ref={elRef}>
      <Title className="highlight-orange section-title">ABOUT</Title>
      {slideItem}
    </Section>
  );
});

export default About;
