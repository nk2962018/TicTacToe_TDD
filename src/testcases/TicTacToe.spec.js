import { render, screen } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';

test('should load TicTacToe', () => {
  render(<TicTacToe />);
  const appComponent = screen.getByTestId('parent');
  expect(appComponent).toBeInTheDocument();
});

it("should have the header loaded", () => {
  render(<TicTacToe />);
  const headerTitle = screen.getByTestId('headerTitle');
  expect(headerTitle).toBeInTheDocument();
}); 

it("should have the proper header name", () => {
  render(<TicTacToe />);
  const headerTitleText = screen.getByTestId('headerTitle');
  expect(headerTitleText).toHaveTextContent('Tic Tac Toe Game');
});
