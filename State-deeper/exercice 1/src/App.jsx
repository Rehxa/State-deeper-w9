/** @format */

import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = (score / 10) * 100 + "%";
    // 2- Compute color (optional)
    if (score < 3) {
      let scoreColor = `#F3BC47`;
      return {
        width: scoreWidth,
        backgroundColor: scoreColor,
      };
    } else if (score < 6) {
      let scoreColor = `#B9C54B`;
      return {
        width: scoreWidth,
        backgroundColor: scoreColor,
      };
    } else if (score < 8) {
      let scoreColor = `#C7E755`;
      return {
        width: scoreWidth,
        backgroundColor: scoreColor,
      };
    } else if (score <= 10) {
      let scoreColor = `#9CC54B`;
      return {
        width: scoreWidth,
        backgroundColor: scoreColor,
      };
    }
    // 3 - Return the style object
  };

  const handleScoreChange = (event) => {
    const value = Math.max(0, Math.min(10, Number(event.target.value)));
    setScore(value);
  };

  return (
    <>
      <div className='score-panel'>
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type='number'
          min='0'
          max='10'
          value={score}
          onChange={handleScoreChange}></input>

        <div className='score-bar'>
          <div className='score-bar-value' style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
