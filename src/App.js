import { useState } from "react";
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

  const handleRoolClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
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
          className="Board App-board"
          name="레드팀"
          color="red"
          gameHistory={myHistory}
        />
        <Board
          className="Board App-board"
          name="블루팀"
          color="blue"
          gameHistory={otherHistory}
        />
      </div>
    </div>
  );
}

export default App;