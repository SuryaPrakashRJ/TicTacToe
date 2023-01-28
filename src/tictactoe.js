import './main.css' 
import { useState }from 'react'

function Square({value, onSquareClick}){
    // const [value, setValue]=useState(null);

    // function handleClick(){
    //     setValue('X');
    // }

    return(
        <button className='square-btn rounded-md' onClick={onSquareClick}>
            {value}
        </button>
    );
}



export default function Board(){
    const [xIsNext, setXIsNext] = useState(true);
    const [squares,setSquares]=useState(Array(9).fill(null))

    function handleClick(i){
        if((squares[i]))
            {
            return;
        }
        const nextSquares=squares.slice();
        if (xIsNext){
            nextSquares[i]='X'
        }
        else{
            nextSquares[i]='O'
        }
        // nextSquares[i]='X';
        setSquares(nextSquares);
        setXIsNext(!xIsNext);

    }

    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status="Winner: "+ winner;
    }
    else{
        status="Next Player: " + (xIsNext?"X":"O");
    }
    
    return(
        <div className='text-center justify-center' >
            <h1 className='Header text-5xl m-5'>
                Tic Tac Toe
            </h1>
            <div className='status text-3xl m-3'>
                {status}
            </div>  
            <div className='flex justify-center'>
            <div className='board'>
              <div className="board-row">
               <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
               <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
               <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
              </div>
              <div className="board-row">
               <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
               <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
               <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
              </div>
              <div className="board-row">
               <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
               <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
               <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
              </div>

            </div>

            </div>
        

        </div>
    );
}

function calculateWinner(squares){
    const lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6] 
    ];

    for(let i=0;i<lines.length;i++){
        const[a ,b ,c]=lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}
