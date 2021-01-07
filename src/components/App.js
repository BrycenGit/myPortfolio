import "../App.css";
import React, { useState, useEffect } from "react";
import Body from "./Body";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  useEffect(() => {
    document.title = `Hi Friends :D`;
  });

  return (
    <>
      <Body />
    </>
  );
};

export default App;
