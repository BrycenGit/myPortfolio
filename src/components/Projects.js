import styled from "styled-components";
import CypherChat from "../assets/Cypherchat.png";
import Project from "./Project";

const Projects = () => {
  return (
    <Container>
      <div className="title">Projects</div>
      <div>
        <Project />
      </div>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  background-color: #f8f8f8;
  .title {
    font-size: 32pt;
    text-decoration: underline;
  }
  /* .description {
    margin-top: 40px;
    width: 400px;
  }
  .imgDiv {
    margin-top: 40px;
  }

  img {
    object-fit: cover;
    width: 350px;
    height: 350px;
    border-radius: 0.5rem;
  } */
`;
