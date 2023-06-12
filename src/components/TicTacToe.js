import '../styles/TicTacToe.css'
import Constants from './constants/Constants';

function TicTacToe() {
  const { TITLE } = Constants;
  return (
    <div className='tictactoe' data-testid='parent'>
      <div className='headerTitle' data-testid='headerTitle'>{TITLE}</div>
    </div>
  );
}

export default TicTacToe;
