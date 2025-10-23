import React from "react";

function ScoreClick(handleClick, score) {
  return (
    <div>
      <h1>{score}</h1>
      <button onClick={handleClick} id="clicker">
        Click me
      </button>
    </div>
  );
}

export default ScoreClick;
