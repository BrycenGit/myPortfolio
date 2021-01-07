import styled from "styled-components";

const Navigation = () => {
  return (
    <Container>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
    </Container>
  );
};

export default Navigation;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    margin: 5px 10px;
    border: none;
    outline: none;
    background: none;
    background-color: green;
    padding: 5px 8px;
    border-radius: 2px;
  }
`;
