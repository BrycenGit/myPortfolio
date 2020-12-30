import styled from "styled-components";

const Portfolio = () => {
  return (
    <Wrapper>
      <div className="navBar">NavBar</div>
      <div className="about">About</div>
      <div className="projects">Projects</div>
      <div className="footer">footer</div>
    </Wrapper>
  );
};

export default Portfolio;

// styled Components
const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  gap: 1rem;
  grid-template-areas:
    "a a a a"
    "b b b b"
    "c c c c"
    "d d d d";
  grid-template-rows: repeat(4, 25%);


  @media screen and (min-width: 600px) {
    grid-template-areas:
    "a a a a"
    ". . c c"
    "b b . ."
    "d d d d";
  }
}

  .navBar {
    grid-area: a;
    background-color: blue;
  }

  .about {
    grid-area: b;
    background-color: red;
  }

  .projects {
    grid-area: c;
    background-color: purple;
  }

  .footer {
    grid-area: d;
    background-color: green;
  }
`;
