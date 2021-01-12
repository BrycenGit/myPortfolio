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
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  /* text-align: center; */
  /* padding-top: 200px; */
  align-content: center;
  /* background-color: #f8f8f8; */

  .item {
    margin: 10px 10px;
  }
  .title {
    font-size: 32pt;
  }
`;
