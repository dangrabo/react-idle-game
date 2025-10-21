import React from "react";

function ScoreClick({ handleClick }) {
  return (
    <div>
      <button onClick={handleClick} id="clicker">
        Click me
      </button>
    </div>
  );
}

export default ScoreClick;
