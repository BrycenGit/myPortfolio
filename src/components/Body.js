import { useState } from "react";
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

  if (about) {
    currentState = <About />;
  } else if (contact) {
    currentState = <Contact />;
  } else if (projects) {
    currentState = <Projects />;
  } else {
    currentState = <Home />;
  }

  return (
    <Wrapper>
      <Navbar />
      {currentState}
      <Footer />
    </Wrapper>
  );
};

export default Body;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
