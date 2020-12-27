import styled from "styled-components";
import { useState } from "react";
import AdminPage from "./AdminPage";
import PortfolioPage from "./PortfolioPage";

const PortfolioControl = () => {
  const [admin, setAdmin] = useState(false);
  let currentState = null;

  const setAdminTrue = () => {
    setAdmin(true);
  };

  const setAdminFalse = () => {
    setAdmin(false);
  };

  if (admin) {
    currentState = <AdminPage />;
  } else {
    currentState = <PortfolioPage />;
  }

  return <div>{currentState}</div>;
};

export default PortfolioControl;
