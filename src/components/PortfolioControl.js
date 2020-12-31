import { useState } from "react";
import AdminPage from "./AdminPage";
import Portfolio from "./Portfolio";

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
    currentState = <AdminPage setAdminFalse={setAdminFalse} />;
  } else {
    currentState = <Portfolio setAdminTrue={setAdminTrue} />;
  }

  return <>{currentState}</>;
};

export default PortfolioControl;
