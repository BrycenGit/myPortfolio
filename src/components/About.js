import styled from "styled-components";
import Clouds from "../assets/Clouds.PNG";
import Head from "../assets/Head.JPG";

const About = () => {
  return (
    <Container>
      <div className="title">About</div>
      <div className="content">
        <div className="imgDiv">
          <img src={Head} />
        </div>
        <div className="description">
          Hi everyone I'm Brycen! I'm a web developer based out of Oregon, but
          now everything is remote so I'm based Everywhere. I Love Learning
          about and Building new web applications. I recently completed a
          programming bootcamp based out of Portland, Oregon called Epicodus and
          I'm excited for what the future has ahead. I can write Code in React,
          Ruby, Javascript, Html, and CSS. I am open to Freelance work as well
          as Employment. If you have any questions or just want to say hi, Feel
          free to contact me. Peace!
        </div>
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
  padding-top: 40px;
  padding-bottom: 40px;
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 25px;
  }
  .title {
    font-size: 32pt;
    text-decoration: underline;
  }
  .imgDiv {
  }
  .description {
    width: 350px;
  }

  img {
    object-fit: cover;
    width: 350px;
    height: 350px;
    border-radius: 50%;
  }
`;
