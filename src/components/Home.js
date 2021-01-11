import styled from "styled-components";
import Navigation from "./Navigation";
import Social from "./Social";

const Home = (props) => {
  const { goToProjects, goToAbout, goToContact } = props;
  return (
    <Container>
      <div className="item title">Hello World, I'm Brycen!</div>
      <div className="item description">I develop web apps ^_^</div>
      <Navigation
        goToAbout={goToAbout}
        goToContact={goToContact}
        goToProjects={goToProjects}
      />
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
  height: 100vh;
  .item {
    margin: 10px 10px;
  }
  .title {
    font-size: 32pt;
  }
`;
