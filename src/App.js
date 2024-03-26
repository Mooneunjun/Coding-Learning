import React, { useState, useEffect } from "react";
import Button from "./Button";
import Board from "./Board";
import "./App.css";
import logoPng from "./assets/logo.png";

function random(n) {
  return Math.floor(Math.random() * n) + 1;
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  const [myWin, setMyWin] = useState("");
  const [otherWin, setOtherWin] = useState("");

  useEffect(() => {
    const mySum = myHistory.reduce((a, b) => a + b, 0);
    const otherSum = otherHistory.reduce((a, b) => a + b, 0);

    // 승패 결정
    if (mySum > otherSum) {
      setMyWin("Board-winner");
      setOtherWin("Board-loser");
    } else if (mySum < otherSum) {
      setMyWin("Board-loser");
      setOtherWin("Board-winner");
    } else {
      setMyWin("");
      setOtherWin("");
    }

    // 결과가 확정된 후, 점수가 20을 넘었는지 확인하고 게임 종료 처리
    if (mySum >= 20 || otherSum >= 20) {
      setTimeout(() => {
        const winnerMessage =
          mySum > otherSum
            ? "레드팀이 이겼습니다!"
            : mySum < otherSum
            ? "블루팀이 이겼습니다!"
            : "비겼습니다!";

        alert(winnerMessage);
        // 게임 초기화
        setMyHistory([]);
        setOtherHistory([]);
        setMyWin("");
        setOtherWin("");
      }, 10); // 화면 업데이트 대기
    }
  }, [myHistory, otherHistory]);

  const handleRoolClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);

    // 다음 숫자 추가
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
    setMyWin("");
    setOtherWin("");
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logoPng} alt="주사위게임 로고" />
        <h1>주사위게임</h1>
        <div>
          <Button
            className="App-button"
            onClick={handleRoolClick}
            color={"blue"}
          >
            던지기
          </Button>
          <Button
            className="App-button"
            onClick={handleClearClick}
            color={"red"}
          >
            처음부터
          </Button>
        </div>
      </div>
      <div className="App-boards">
        <Board
          className={`Board App-board ${myWin}`}
          name="레드팀"
          color="red"
          gameHistory={myHistory}
        />
        <Board
          className={`Board App-board ${otherWin}`}
          name="블루팀"
          color="blue"
          gameHistory={otherHistory}
        />
      </div>
    </div>
  );
}

export default App;
