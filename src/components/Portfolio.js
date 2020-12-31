import styled from "styled-components";
import Projects from "./Projects";
import clouds from "../assets/clouds.PNG";
import ProjectCarousel from "./ProjectCarousel";

// const divStyle = {
//   backgroundImage:
//     "url('https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/06/MER6619086644d19a67a11328642904d_bears0630-1024x576.jpg')",
//   width: "auto",
// };

const Portfolio = () => {
  return (
    <Wrapper>
      {/* <div className="navBar">NavBar</div> */}
      <div className="item about">
        <h3>About:</h3>
        <p>
          Hello all! I'm a software developer with an abundance of experience in
          culinary management. I've decided to journey into the world of tech to
          gain new knowledge and insight on the ever evolving world. This comes
          at a time when the majority of human interaction is happening in the
          digital realm. I'm excited for the journey ahead and the experiences I
          will be apart of.{" "}
        </p>
      </div>

      <div className=" projects">
        <Projects />
        {/* <ProjectCarousel /> */}
        {/* <h3>Projects:</h3> */}
      </div>
      {/* <div className="footer">footer</div> */}
      <div className=" pictureAbout">
        <img className="picture" src={clouds} alt="Me" />
      </div>
      <div className=" pictureProjects">
        <img
          className="picture"
          src="https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/06/MER6619086644d19a67a11328642904d_bears0630-1024x576.jpg"
          alt="Me"
        />
      </div>
    </Wrapper>
  );
};

export default Portfolio;

// styled Components
const Wrapper = styled.div`
  /* width: 100%; */
  min-height: 100%;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* grid-auto-rows: 240px; */
  /* gap: 1rem; */
  grid-template-areas:
    /* "a a a a" */
    "b b b b"
    "i i i i"
    "c c c c"
    "i2 i2 i2 i2";
  /* "d d d d"; */
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 1fr 1fr 1fr;

  @media screen and (min-width: 600px) {
    grid-template-areas:
      /* "a a a a" */
      "b b i i"
      "i2 i2 c c";
    /* "d d d d"; */
    grid-template-rows: 1fr 1fr;
  }

  /* .navBar {
    grid-area: a;
    background-color: blue;
    height: 45px;
  } */

  .about {
    grid-area: b;
    background-color: red;
  }

  .item {
    /* margin: 10px; */
    padding: 20px;
  }

  .projects {
    grid-area: c;
    background-color: purple;
  }

  /* .footer {
    grid-area: d;
    background-color: green;
  } */

  .pictureAbout {
    grid-area: i;
    /* background-color: orange; */
  }
  .pictureProjects {
    grid-area: i2;
    /* background-color: orange; */
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
