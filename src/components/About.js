import styled from "styled-components";
import Clouds from "../assets/Clouds.PNG";

const About = () => {
  return (
    <Container>
      <div>
        <span>About</span>
        <br />
        <span>Description</span>
      </div>
      <div>
        <img src={Clouds} />
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin: 50px 50px;
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 992px) {
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
