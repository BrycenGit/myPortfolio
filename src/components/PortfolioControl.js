import styled from "styled-components";
import { useState } from "react";
import AdminPage from "./AdminPage";
import Portfolio from "./Portfolio";

const PortfolioControl = () => {
  const [admin, setAdmin] = useState(false);
  let currentState = null;

  // const setAdminTrue = () => {
  //   setAdmin(true);
  // };

  // const setAdminFalse = () => {
  //   setAdmin(false);
  // };

  if (admin) {
    currentState = <AdminPage />;
  } else {
    currentState = <Portfolio />;
  }

  return (
    <Wrapper>
      <div className="header">NavBar</div>
      <div className="main">{currentState}</div>
      <div className="footer">Footer</div>
    </Wrapper>
  );
};

export default PortfolioControl;

const Wrapper = styled.div`
  /* margin: 0; */
  height: 100vh;
  width: 100%;

  display: grid;
  gap: 1rem;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";

  .header {
    grid-area: header;
  }

  .main {
    grid-area: main;
  }

  .footer {
    grid-area: footer;
  }
`;
