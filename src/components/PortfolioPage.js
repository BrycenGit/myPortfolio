import styled from "styled-components";
import Projects from "./Projects";

const divStyle = {
  backgroundImage:
    "url('https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/06/MER6619086644d19a67a11328642904d_bears0630-1024x576.jpg')",
};

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
    <Grid2>
      <div className="card card-tall" style={divStyle}>
        1
      </div>
      <div className="card " style={divStyle}>
        2
      </div>
      <div className="card " style={divStyle}>
        3
      </div>
      <div className="card card-wide" style={divStyle}>
        4
      </div>
      <div className="card " style={divStyle}>
        5
      </div>
      <div className="card " style={divStyle}>
        6
      </div>
      <div className="card card-wide" style={divStyle}>
        7
      </div>
      <div className="card " style={divStyle}>
        8
      </div>
      <div className="card card-tall" style={divStyle}>
        9
      </div>
      <div className="card " style={divStyle}>
        10
      </div>
      <div className="card " style={divStyle}>
        11
      </div>
      <div className="card card-wide" style={divStyle}>
        12
      </div>
    </Grid2>
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

const Grid2 = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 240px;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
      rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .card:hover {
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
      rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
    transform: translateY(-3px) scale(1.1);
  }
  @media screen and (min-width: 600px) {
    .card-tall {
      grid-row: span 2 / auto;
    }

    .card-wide {
      grid-column: span 2 / auto;
    }
  }
`;

const Hello = styled.div`
  background-color: blue;
  /* width: 750px; */
`;
