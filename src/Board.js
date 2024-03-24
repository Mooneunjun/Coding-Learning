import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
  return Math.floor(Math.random() * n) + 1;
}

function Board({ name, color }) {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRoolClick = () => {
    const NextNum = random(6);
    setNum(NextNum);
    setSum(sum + NextNum);
    setGameHistory([...gameHistory, NextNum]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRoolClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{gameHistory.join(", ,")}</p>
    </div>
  );
}

export default Board;
