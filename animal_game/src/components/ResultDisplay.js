import React from "react";

export default function ResultDisplay({ result }) {
  return (
    <div className="column result-column">
      <div className="animal-grid-header"><h2>Result</h2></div>
      <span>
        {result}
      </span>
    </div>
  );
}
