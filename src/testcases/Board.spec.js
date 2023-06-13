import { render, screen } from '@testing-library/react';
import Board from '../components/Board';
import Constants from '../components/constants/Constants';
import Tile from '../components/Tile';

it('should render board component' , () => {
    render(<Board/>);
    const boardComponent = screen.getByTestId('board');
    expect(boardComponent).toBeInTheDocument();
})

it('should render 3x3 tiles' , () => {
    render(<Board/>);
    render(<Tile value='tiles'/>);
    render(<Tile value='tiles'/>);
    render(<Tile value='tiles'/>);
    render(<Tile value='tiles'/>);
    render(<Tile value='tiles'/>);
    render(<Tile value='tiles'/>);
    render(<Tile value='tiles'/>);
    render(<Tile value='tiles'/>);
    render(<Tile value='tiles'/>);
    const tiles = screen.getAllByTestId('tiles');
    expect(tiles).toHaveLength(Constants.NO_OF_TILES_IN_THE_BOARD);
})
