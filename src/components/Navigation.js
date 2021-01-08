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
