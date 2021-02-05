import { useState, useEffect } from "react";
import styled from "styled-components";

const Navigation = (props) => {
  const { goToProjects, goToAbout, goToContact } = props;
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 700) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let x = ["navbar"];

  if (scrolled) {
    x.push("scrolled");
  }

  return (
    <Container>
      <header className={x.join(" ")}>
        <div className="navItem" onClick={goToAbout}>
          About
        </div>
        <div className="navItem" onClick={goToProjects}>
          Projects
        </div>
        <div className="navItem" onClick={goToContact}>
          Contact
        </div>
      </header>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  .navbar {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: white;
    transition: all 0.7s ease-in;
  }
  .scrolled {
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    color: white;
  }
  .logo img {
    width: 50px;
  }
  .navigation {
  }

  .navItem {
    padding: 15px 20px;
  }
`;
