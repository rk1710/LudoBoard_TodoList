import React, { useState } from 'react'

export const LudoBoard = () => {
    
    let [isLiked, setIsLiked] = useState(false);
    let [moves, setMoves] = useState({blue: 99, red: 0, yellow: 0, green: 0});

    const handleHeartClick = () => {
        console.log('handleHeartClick clicked');
        setIsLiked(!isLiked);
    }

    const handleBlueClicked = () => {
        setMoves({ ...moves, blue: moves.blue + 1 });
    }

    const handleRedClicked = () => {
        setMoves({ ...moves, red: moves.red + 1 });
    }

    const handleGreenClicked = () => {
        setMoves({ ...moves, green: moves.green + 1 });
    }

    const handleYellowClicked = () => {
        setMoves({ ...moves, yellow: moves.yellow + 1 });
    }

    return (
        <div className='text-center'>
            <h1>Welcome to Ludo Board <span onClick={handleHeartClick} style={{ color: 'red' }}>
                {isLiked ? <i className="fa-sharp fa-solid fa-heart"></i> :
                <i className="fa-regular fa-heart"></i>}
            </span></h1>
            <div>
                <h6>Blue Moves: {moves.blue}</h6>
                <button onClick={handleBlueClicked} className="btn btn-primary">+1</button>

                <h6>Red Moves: {moves.red}</h6>
                <button onClick={handleRedClicked} className="btn btn-danger">+1</button>

                <h6>Green Moves: {moves.green}</h6>
                <button onClick={handleGreenClicked} className="btn btn-success">+1</button>

                <h6>Yellow Moves: {moves.yellow}</h6>
                <button onClick={handleYellowClicked} className="btn btn-warning">+1</button>
            </div>
        </div>
    )
}

export default LudoBoard;