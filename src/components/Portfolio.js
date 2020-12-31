import styled from "styled-components";
import Projects from "./Projects";
import clouds from "../assets/clouds.PNG";
import ProjectCarousel from "./ProjectCarousel";

// const divStyle = {
//   backgroundImage:
//     "url('https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/06/MER6619086644d19a67a11328642904d_bears0630-1024x576.jpg')",
//   width: "auto",
// };

const Portfolio = (props) => {
  const { setAdminTrue } = props;

  return (
    <Wrapper>
      <div className="navBar">
        <button
          onClick={() => {
            alert("hello");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            alert("Just Fear and Hate");
          }}
        >
          News
        </button>
        <button
          onClick={() => {
            alert("Hello");
          }}
        >
          Contact
        </button>
        <button
          onClick={() => {
            alert("hello");
          }}
        >
          About
        </button>
      </div>
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

      <div className="item projects">
        <Projects />
        {/* <ProjectCarousel /> */}
        {/* <h3>Projects:</h3> */}
      </div>
      <div className="footer">
        <div className="copy">
          Copyright © Brycen Bartolome. All rights reserved.
        </div>
        <div className="buttons">
          <button onClick={setAdminTrue}>Admin</button>
          <button
            onClick={() => {
              alert("hello");
            }}
          >
            Home
          </button>

          <button
            onClick={() => {
              alert("I prefer not to watch");
            }}
          >
            Contact
          </button>
          <button
            onClick={() => {
              alert("hello");
            }}
          >
            About
          </button>
        </div>
      </div>
      <div className="item pictureAbout">
        <img className="picture" src={clouds} alt="Me" />
      </div>
      <div className="item pictureProjects">
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
  width: 100%;
  height: 100vh;
  /* min-height: 100%; */
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* grid-auto-rows: 240px; */
  /* gap: 1rem; */
  grid-template-areas:
    "a a a a"
    "b b b b"
    "i i i i"
    "c c c c"
    "i2 i2 i2 i2"
    "d d d d";
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: auto 0.75fr 1fr 0.75fr 1fr auto;

  @media screen and (min-width: 600px) {
    grid-template-areas:
      "a a a a"
      "b b i i"
      "i2 i2 c c"
      "d d d d";
    grid-template-rows: auto 1fr 1fr auto;
  }
  @media screen and (min-width: 992px) {
    height: 100vh;
    grid-template-areas:
      "a a a a"
      "b b i i"
      "c c i i"
      "i2 i2 i i"
      "d d d d";
    grid-template-rows: auto 1fr 1fr 1fr auto;
  }

  .navBar {
    grid-area: a;
    background-color: #3975c2;
    /* height: 45px; */
    /* color: #f8f8f8; */
    /* padding: 10px; */
  }

  .navBar button {
    border: none;
    outline: none;
    background: none;
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 17px;
  }

  .navBar button:hover {
    background-color: #ddd;
    color: black;
  }

  .about {
    grid-area: b;
    /* background-color: red; */
  }

  .item {
    /* margin: 10px; */
    padding: 20px;
  }

  .projects {
    grid-area: c;
    /* background-color: purple; */
  }

  .footer {
    grid-area: d;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .footer .copy {
    float: left;
    padding: 10px 14px;
  }

  .footer button {
    border: none;
    outline: none;
    background: none;
    float: left;
    color: #f8f8f8;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 17px;
  }

  .footer button:hover {
    /* background-color: #ddd; */
    color: black;
  }

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
    border-radius: 20px;
  }
`;
