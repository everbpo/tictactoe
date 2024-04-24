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
    [1, 5, 9], [7, 5, 3],[7,4,1],[8,5,2],[9,6,3]  ]
  const calculatingWinner = () => {
    console.log(tiroX);
    console.log(tiroO)
    let centinela = 0;
    for (let i = 0; i < winners.length; i++) {
      console.log(winners[i]);
      for (let j = 0; j < tiroO.length; j++) {
        if (!winners[i].includes(tiroO[j])) {
          centinela = 0;
          break; // Exit the loop if the current winner combination does not contain the current 'O' move
        }
        ++centinela;
        if (centinela == BOARD_SIZE) {
          setWinner('O');
          return; // Exit the function once a winner is found
        }
      }
      centinela = 0; // Reset the counter for the next iteration
      for (let j = 0; j < tiroX.length; j++) {
        if (!winners[i].includes(tiroX[j])) {
          centinela = 0;
          break; // Exit the loop if the current winner combination does not contain the current 'X' move
        }
        ++centinela;
        if (centinela == BOARD_SIZE) {
          setWinner('X');
          return; // Exit the function once a winner is found
        }
      }
    }
  }
  const handleTiro = (sqNo) => {
    if (tiro === PLAYERS.X) {
      const tiros = [...tiroX];
      tiros.push(sqNo)
      setTiroX([...tiros]);
      setTiro(PLAYERS.O);
    } else {
      setTiro(PLAYERS.X);
      const tiros = [...tiroO];
      tiros.push(sqNo)
      setTiroO([...tiros]);
    }
    calculatingWinner();
  }
  return (
    <>
      <h1 className="text-4xl text-center bg-white w-full text-blue-600">Game</h1>
      <Board winner={winner} boardSize={BOARD_SIZE} handleTiro={handleTiro} tiro={tiro} />
    </>
  )
}

export default App