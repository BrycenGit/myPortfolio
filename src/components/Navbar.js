import styled from "styled-components";

const Navbar = (props) => {
  const { backToHome } = props;
  return (
    <Container>
      <button onClick={backToHome}>Home</button>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: #f8f8f8;
  /* padding: 10px 14px; */
  button {
    border: none;
    outline: none;
    background: none;
    padding: 10px 14px;
    border-radius: 2px;
  }
  button:hover {
    text-decoration: underline;
  }
`;
