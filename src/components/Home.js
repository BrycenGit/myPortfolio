import styled from "styled-components";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <Container>
      <h1>Hello World, I'm Brycen!</h1>
      <div>I develop web apps ^_^</div>
      <Navigation />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 20%;
  background-color: #f8f8f8;
`;
