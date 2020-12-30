import styled from "styled-components";

const divStyle = {
  backgroundImage:
    "url('https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/06/MER6619086644d19a67a11328642904d_bears0630-1024x576.jpg')",
};

const Portfolio = () => {
  return (
    <Wrapper>
      <div className="navBar">NavBar</div>
      <div className="about">About</div>

      <div className="projects">Projects</div>
      <div className="footer">footer</div>
      <div className="img" style={divStyle}>
        Bears
      </div>
    </Wrapper>
  );
};

export default Portfolio;

// styled Components
const Wrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* grid-auto-rows: 240px; */
  gap: 1rem;
  grid-template-areas:
    "a a a a"
    "b b b b"
    "img img img img"
    "c c c c"
    "d d d d";
  /* grid-template-rows: repeat(4, 25%); */
  /* grid-auto-rows: 240px; */

  @media screen and (min-width: 600px) {
    grid-template-areas:
    "a a a a"
    "b b img img"
    ". . c c"
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

  .img {
    grid-area: img;
    background-color: orange;
  }
`;
