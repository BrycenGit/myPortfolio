import { useState, useRef } from "react";
import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

const Body = () => {
  let currentState = null;
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [projects, setProjects] = useState(false);
  const aboutSection = useRef();
  const mainSection = useRef();
  const projectsSection = useRef();
  const backToHome = () => {
    setAbout(false);
    setContact(false);
    setProjects(false);
  };

  const goToProjects = () => {
    // setProjects(true);
    projectsSection.current.scrollIntoView({ behavior: "smooth" });
  };

  const goToAbout = () => {
    // setAbout(true);
    aboutSection.current.scrollIntoView({ behavior: "smooth" });
  };

  const goToMain = () => {
    mainSection.current.scrollIntoView({ behavior: "smooth" });
  };

  const goToContact = () => {
    setContact(true);
  };

  if (about) {
    currentState = <About />;
  } else if (contact) {
    currentState = <Contact />;
  } else if (projects) {
    currentState = <Projects />;
  } else {
    currentState = (
      <>
        <div ref={mainSection}>
          <Home
            goToAbout={goToAbout}
            goToContact={goToContact}
            goToProjects={goToProjects}
          />
        </div>
        <div ref={projectsSection}>
          <Projects />
        </div>
        <div ref={aboutSection}>
          <About />
        </div>
      </>
    );
  }

  return (
    <Wrapper>
      <Navbar backToHome={backToHome} />
      <div>{currentState}</div>
      <Footer classname="show" />
    </Wrapper>
  );
};

export default Body;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #f8f8f8;
`;
