import React from "react";

const ResultCounter = ({ amount }) => (
  <div>
    {amount} result{amount === 1 ? "" : "s"}
  </div>
);

export default ResultCounter;
