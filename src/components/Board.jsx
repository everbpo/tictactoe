
import { useEffect, useState } from 'react';
import Square from './Square'

function Board({ tiro, handleTiro, boardSize, winner }) {
    const [squares, setSquares] = useState([]);
    let square = [];
    useEffect(() => {
        for (let i = 1; i <= boardSize * boardSize; i++)
            square.push(i);
        setSquares(square)
        square=[];
    },[boardSize]);

    return (
        <div
            className=' p-10 rounded-xl max-w-4xl mx-auto w-full bg-slate-200'
        >
            <h1 className='text-center text-7xl font-bold'>{winner == null ?  `Tiro:${tiro}`:`Ganador:${winner}`} </h1>
            <div className={`bg-orange-500 grid  grid-cols-${boardSize} grid-rows-${boardSize}`}>
                {
                    squares.map((i) => <Square key={i} sqNo={i} tiro={tiro} handleTiro={handleTiro} />)
                }
            </div>

        </div>
    )
}

export default Board