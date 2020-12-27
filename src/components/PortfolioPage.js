import styled from "styled-components";
import Projects from "./Projects";
const PortfolioPage = () => {
  return (
    // <Grid>
    //   <Hello>
    //     <p>Hello World</p>
    //     <p>My name is Brycen.</p>
    //   </Hello>
    //   <div>
    //     <Projects />
    //   </div>
    //   <div className="card">1</div>
    //   <div className="card">2</div>
    //   <div className="card">3</div>
    //   <div className="card">4</div>
    //   <div className="card">5</div>
    //   <div className="card">6</div>
    //   <div className="card">7</div>
    //   <div className="card">8</div>
    //   <div className="card">9</div>
    //   <div className="card">10</div>
    //   <div className="card">11</div>
    //   <div className="card">12</div>
    // </Grid>
  );
};

export default PortfolioPage;

const Grid = styled.div`
  display: grid;
  gap: 1rem;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  grid-template-columns: repeat(12, 1fr);

  grid-template-columns: repeat(12, minmax(240px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  .card {
    background-color: lightblue;
    text-align: center;
  }
`;

const Hello = styled.div`
  background-color: blue;
  /* width: 750px; */
`;
