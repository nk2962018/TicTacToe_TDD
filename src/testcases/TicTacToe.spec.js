import { render, screen } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';

describe("The TicTacToe app works fine when", () => {
  beforeEach(() => {
    render(<TicTacToe />);
  });

  it("should load TicTacToe", () => {
    const appComponent = screen.getByTestId('parent');
    expect(appComponent).toBeInTheDocument();
  });

  it("should have the header loaded", () => {
    const headerTitle = screen.getByTestId('headerTitle');
    expect(headerTitle).toBeInTheDocument();
  }); 

  it("should have the proper header name", () => {
    const headerTitleText = screen.getByTestId('headerTitle');
    expect(headerTitleText).toHaveTextContent('Tic Tac Toe Game');
  });

});

 