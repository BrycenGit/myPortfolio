import styled from "styled-components";
import Navigation from "./Navigation";
import Social from "./Social";

const Home = () => {
  return (
    <Container>
      <div className="item title">Hello World, I'm Brycen!</div>
      <div className="item description">I develop web apps ^_^</div>
      <Navigation />
      <Social />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: center;
  padding-top: 200px;
  background-color: #f8f8f8;

  .item {
    margin: 10px 10px;
  }
  .title {
    font-size: 32pt;
  }
`;
