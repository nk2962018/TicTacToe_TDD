import '../styles/TicTacToe.css'
import Tile from './Tile';
import Constants from './constants/Constants';

function TicTacToe() {
  const { TITLE } = Constants;
  return (
    <div className='tictactoe' data-testid='parent'>
      <div className='headerTitle' data-testid='headerTitle'>{TITLE}</div>
      <Tile value='1'/>
    </div>
  );
}

export default TicTacToe;
