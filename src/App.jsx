import { useState } from "react"
import Board from "./components/Board";

function App() {
  const PLAYERS = {
    X: 'X',
    O: 'O'
  }
  const [tiroX, setTiroX] = useState([]);
  const [tiroO, setTiroO] = useState([]);
  const [winner, setWinner] = useState(null);
  const BOARD_SIZE = 3
  const [tiro, setTiro] = useState('O');
  const winners = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 5, 9], [7, 5, 3], [7, 4, 1], [8, 5, 2], [9, 6, 3]]
  const calculatingWinner = (tiros,winner) => {

    let centinela = 0;
    for (let i = 0; i < winners.length; i++) {
      for (let j = 0; j < tiros.length; j++) {
        if (!winners[i].includes(tiros[j])) {
          centinela = 0;
          break; // Exit the loop if the current winner combination does not contain the current 'O' move
        }
        ++centinela;
        if (centinela == BOARD_SIZE) {
          setWinner(winner);
          return true; // Exit the function once a winner is found
        }
      }
    }
    return false;
  }
  const handleTiro = (sqNo) => {
    if (tiro === PLAYERS.X) {
      const tiros = [...tiroX];
      tiros.push(sqNo)
      setTiroX([...tiros]);
      setTiro(PLAYERS.O);
      calculatingWinner(tiros,'X');
    } else {
      const tiros = [...tiroO];
      tiros.push(sqNo)
      setTiroO([...tiros]);
      setTiro(PLAYERS.X);
      calculatingWinner(tiros,'O');
    }
  }
  return (
    <>
      <h1 className="text-4xl text-center bg-white w-full text-blue-600">Game</h1>
      <Board winner={winner} boardSize={BOARD_SIZE} handleTiro={handleTiro} tiro={tiro} />
    </>
  )
}

export default App
