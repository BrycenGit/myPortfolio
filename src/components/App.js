import "../App.css";
import React from "react";
import styled from "styled-components";
import PortfolioControl from "./PortfolioControl";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    // <Wrapper>
    //   <div className="header">NavBar</div>
    //   <div className="main">
    //     <PortfolioControl />
    //   </div>
    //   <div className="footer">Footer</div>
    // </Wrapper>
    <>
      <PortfolioControl />
    </>
  );
};

export default App;

const Wrapper = styled.div`
  /* margin: 0; */
  height: 100vh;
  width: 100%;

  display: grid;
  /* gap: 1rem; */
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";

  .header {
    grid-area: header;
    height: 45px;
    background-color: black;
    color: #f8f8f8;
  }

  .main {
    grid-area: main;
  }

  .footer {
    grid-area: footer;
    background-color: black;
    color: #f8f8f8;
  }
`;
