import styled from "styled-components";
import Projects from "./Projects";
const PortfolioPage = () => {
  return (
    <div>
      <Hello>
        <p>Hello World</p>
        <p>My name is Brycen.</p>
      </Hello>
      <Projects />
    </div>
  );
};

export default PortfolioPage;

const Hello = styled.div`
  background-color: blue;
`;
