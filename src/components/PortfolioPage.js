import styled from "styled-components";
import Projects from "./Projects";
const PortfolioPage = () => {
  return (
    <Grid>
      <Hello>
        <p>Hello World</p>
        <p>My name is Brycen.</p>
      </Hello>
      {/* <div> */}
      <Projects />
      {/* </div> */}
    </Grid>
  );
};

export default PortfolioPage;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Hello = styled.div`
  background-color: blue;
  /* width: 750px; */
`;
