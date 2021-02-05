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
  /* background-color: #0dade1; */
  min-width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  color: white;

  /* background-color: #0dade1; */
  background-image: linear-gradient(to right, #0f6782, #0dade1);
  .title {
    font-size: 32pt;
    /* text-decoration: underline; */
  }
`;
