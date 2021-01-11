import styled from "styled-components";

const Projects = () => {
  return (
    <Container>
      <div className="title">Projects</div>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: center;

  background-color: #f8f8f8;
  .title {
    font-size: 32pt;
    text-decoration: underline;
  }
`;
