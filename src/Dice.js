import { useState } from "react";
import diceBlue01 from "./assets/dice-blue-1.svg";

// function Dice() {
//   return <img src={diceBlue01} alt="주사위" />;
// }

function Dice() {
  const handleClick = (event) => {
    console.log("주사위를 굴립니다.");

    event.target.classList.toggle("active");
  };
  return (
    <div>
      <img src={diceBlue01} alt="주사위" />
      <button className={`주사위굴리기 active`} onClick={handleClick}>
        주사위 굴리기
      </button>

      <button className={`초기화`} onClick={handleClick}>
        {" "}
        초기화
      </button>
    </div>
  );
}

export default Dice;
