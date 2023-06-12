import { render, screen } from '@testing-library/react';
import TicTacToe from './TicTacToe';

test('should load TicTacToe', () => {
  render(<TicTacToe />);
  const appComponent = screen.getByTestId('parent');
  expect(appComponent).toBeInTheDocument();
});
