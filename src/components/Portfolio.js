import styled from "styled-components";

// const divStyle = {
//   backgroundImage:
//     "url('https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/06/MER6619086644d19a67a11328642904d_bears0630-1024x576.jpg')",
//   width: "auto",
// };

const Portfolio = () => {
  return (
    <Wrapper>
      {/* <div className="navBar">NavBar</div> */}
      <div className="item about">About</div>

      <div className="item projects">Projects</div>
      {/* <div className="footer">footer</div> */}
      <div className="item pictureAbout">
        <img
          className="picture"
          src="https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/06/MER6619086644d19a67a11328642904d_bears0630-1024x576.jpg"
        />
      </div>
      <div className="item pictureProjects">
        <img
          className="picture"
          src="https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/06/MER6619086644d19a67a11328642904d_bears0630-1024x576.jpg"
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
