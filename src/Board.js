import Dice from "./Dice";
import "./Board.css";

function Board({ name, color, gameHistory, className = "" }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  const BoardHeading = `Board-heading`;
  return (
    <div className={className}>
      <h2 className={BoardHeading}>{name}</h2>
      <Dice className="Dice" color={color} num={num} />
      <h2 className={BoardHeading}>총점</h2>
      <p>{sum}</p>
      <h2 className={BoardHeading}>기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
