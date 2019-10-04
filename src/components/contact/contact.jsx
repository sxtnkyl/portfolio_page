import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Section,
  Title,
  Triangle,
  ContactInfo,
  ContactIcon,
  BottomBar,
  BotIcon
} from "./contactStyles";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersection from "../intersectionHook";

///////add spring on scroll to change Triangle height from 0 to 50vh

const Contact = forwardRef((props, ref) => {
  const { observerEntry, elRef } = useIntersection({ threshold: 0.01 });

  useImperativeHandle(ref, () => ({
    getVport() {
      return observerEntry;
    }
  }));

  const [phone, openPhone] = useState(false);
  const revealPhone = useSpring({
    height: phone ? 100 : 0
  });

  const [email, openEmail] = useState(false);
  const revealEmail = useSpring({
    height: email ? 100 : 0
  });

  const contactIcons = (
    <ContactInfo id="ContactInfo">
      <ContactIcon id="left">
        <FontAwesomeIcon
          id="icon"
          icon={["fas", "phone"]}
          size="5x"
          onClick={() => openPhone(!phone)}
        />

        <div id="info">
          <div id="phone">Want to chat?</div>
          <animated.div id="reveal" style={revealPhone}>
            Call anytime at <br />
            <span id="highlight">850-240-6650</span>
          </animated.div>
        </div>
      </ContactIcon>

      <ContactIcon id="right">
        <FontAwesomeIcon
          id="icon"
          icon={["fas", "envelope"]}
          size="5x"
          onClick={() => openEmail(!email)}
        />

        <div id="info">
          <div id="email">Send a message!</div>
          <animated.div id="reveal" style={revealEmail}>
            Send an email to get in touch at
            <br />
            <span id="highlight">ksexton.exe@gmail.com</span>
          </animated.div>
        </div>
      </ContactIcon>
    </ContactInfo>
  );
  const bottomIcons = (
    <BottomBar>
      <BotIcon>
        <a href="https://codepen.io/sxtnkyl">
          <FontAwesomeIcon icon={["fab", "codepen"]} size="lg" />
        </a>
      </BotIcon>

      <BotIcon>
        <a href="https://github.com/sxtnkyl">
          <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
        </a>
      </BotIcon>

      <BotIcon>
        <a href="https://www.linkedin.com/in/kyle-sexton-52b30468/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
        </a>
      </BotIcon>

      <BotIcon>
        <a href="https://www.freecodecamp.org/fcc5d006f09-3abf-43d3-9afa-8aafdb5b0fdd">
          <FontAwesomeIcon icon={["fab", "free-code-camp"]} size="lg" />
        </a>
      </BotIcon>
    </BottomBar>
  );
  return (
    <Section id="contact" ref={elRef}>
      <Title>Contact</Title>
      <Triangle />
      {contactIcons}
      {bottomIcons}
    </Section>
  );
});

export default Contact;
