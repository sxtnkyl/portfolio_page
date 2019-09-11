import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  Section,
  Header,
  Title,
  Square,
  Triangle,
  ContactInfo,
  ContactIcon,
  BottomSquare,
  BotIcon
} from "./contactStyles";
import ToTop from "./toTopArrow";
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
  const [email, openEmail] = useState(false);
  const revealPhone = useSpring({
    height: phone ? 100 : 0
  });
  const revealEmail = useSpring({
    height: email ? 100 : 0
  });

  const contactIcons = (
    <ContactInfo>
      <ContactIcon>
        <a>
          <FontAwesomeIcon
            icon={["fas", "phone"]}
            size="5x"
            onClick={() => openPhone(!phone)}
          />
        </a>
        <div id="info">
          <div className="heavy" id="phone">
            Want to chat?
          </div>
          <animated.div id="reveal" style={revealPhone}>
            Call anytime at <br />
            <span className="highlight-orange">850-240-6650</span>
          </animated.div>
        </div>
      </ContactIcon>

      <ContactIcon>
        <a>
          <FontAwesomeIcon
            icon={["fas", "envelope"]}
            size="5x"
            onClick={() => openEmail(!email)}
          />
        </a>
        <div id="info">
          <div className="heavy" id="email">
            Send a message!
          </div>
          <animated.div id="reveal" style={revealEmail}>
            Send an email to get in touch at
            <br />
            <span className="highlight-orange">ksexton.exe@gmail.com</span>
          </animated.div>
        </div>
      </ContactIcon>
    </ContactInfo>
  );
  const bottomIcons = (
    <BottomSquare>
      <BotIcon>
        <a href="https://codepen.io/">
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
      <ToTop />
    </BottomSquare>
  );
  return (
    <Section className="flex-c" id="contact" ref={elRef}>
      <Header>
        <Square>
          <Title className="highlight-orange section-title">Contact</Title>
        </Square>
        <Triangle />
      </Header>
      {contactIcons}
      {bottomIcons}
    </Section>
  );
});

export default Contact;
