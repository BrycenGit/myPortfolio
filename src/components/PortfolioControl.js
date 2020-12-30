// import styled from "styled-components";
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

  return <div>{currentState}</div>;
};

export default PortfolioControl;
