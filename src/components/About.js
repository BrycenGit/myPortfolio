import styled from "styled-components";
import Clouds from "../assets/Clouds.PNG";
import Head from "../assets/Head.JPG";

const About = () => {
  return (
    <Container>
      <div className="title">About</div>
      <div className="imgDiv">
        <img src={Head} />
      </div>
      <div className="description">
        Hi everyone I'm Brycen! I'm a web developer based out of Oregon, but now
        everything is remote so I'm based Everywhere.
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: #f8f8f8;
  padding-bottom: 200px;
  .title {
    font-size: 32pt;
    text-decoration: underline;
  }
  .imgDiv {
    margin-top: 40px;
  }
  .description {
    margin-top: 40px;
    width: 400px;
  }

  img {
    object-fit: cover;
    width: 350px;
    height: 350px;
    border-radius: 50%;
  }
`;
