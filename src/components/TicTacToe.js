import '../styles/TicTacToe.css'
import Board from './Board';
import Constants from './constants/Constants';

function TicTacToe() {
  const { TITLE } = Constants;
  return (
    <div className='tictactoe' data-testid='parent'>
      <div className='headerTitle' data-testid='headerTitle'>{TITLE}</div>
      <Board/>
    </div>
  );
}

export default TicTacToe;
