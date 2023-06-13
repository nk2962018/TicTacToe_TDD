import { render, screen } from '@testing-library/react';
import Board from '../components/Board';

it('should render board component' , () => {
    render(<Board/>);
    const boardComponent = screen.getByTestId('board');
    expect(boardComponent).toBeInTheDocument();
})