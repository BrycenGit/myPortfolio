import styled from "styled-components";
import Home from "../icons/Home.svg";

const Navbar = (props) => {
  const { backToHome } = props;
  return (
    <Container>
      <div className="icon" onClick={backToHome}>
        <img src={Home} height={30} />
      </div>
      {/* <button onClick={backToHome}>Home</button> */}
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
  .icon {
    padding: 10px 14px;
  }
  .icon:hover {
    cursor: pointer;
  }
`;
