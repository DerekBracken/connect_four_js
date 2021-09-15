import Game from '../models/Game';
import CellComponent from './CellComponent';
import '../styles/OtherComponent.css'
import ApiComponent from './ApiComponent';
import { useState } from 'react'

const BoardComponent = ({game, board, handleClick, handleSelectClick}) => {
    const [hintColumn, setHintColumn] = useState(null)

    const renderCells = board.map((cell) => {
        return <CellComponent player={cell.player} winning={cell.winning} id={cell.id} key={cell.id} handleClick={handleClick}/>
    })

    return (
        <>
            <div className ='selectButtons'>
                <button id="0" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                <button id="1" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                <button id="2" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                <button id="3" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                <button id="4" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                <button id="5" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                <button id="6" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
            </div>

            <div className='grid' onClick= {(event) => {
                console.log(event.target)
            }}>

                {renderCells}

            </div>
            <ApiComponent game={game} handleHintUpdate={(newHint) => setHintColumn(newHint)} />
        </>
    )
}

export default BoardComponent;