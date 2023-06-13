import Tile from "./Tile";
import '../styles/Board.css'

const Board = () =>{
    return(
        <div data-testid='board' className='board-container'>
            <Tile value='1'/>
            <Tile value='2'/>
            <Tile value='3'/>
            <Tile value='4'/>
            <Tile value='5'/>
            <Tile value='6'/>
            <Tile value='7'/>
            <Tile value='8'/>
            <Tile value='9'/>
        </div>
    )
}

export default Board;