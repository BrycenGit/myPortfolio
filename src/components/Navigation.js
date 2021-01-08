import styled from "styled-components";

const Navigation = (props) => {
  const { goToProjects, goToAbout, goToContact } = props;
  return (
    <Container>
      <button onClick={goToAbout}>About</button>
      <button onClick={goToProjects}>Projects</button>
      <button onClick={goToContact}>Contact</button>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 10px;
  button {
    border: none;
    outline: none;
    background: none;
    padding: 5px 8px;
    border-radius: 2px;
  }

  button:hover {
    background-color: black;
    color: #f8f8f8;
  }
`;
