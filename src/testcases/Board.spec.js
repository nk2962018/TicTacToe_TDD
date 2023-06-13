import { render, screen } from '@testing-library/react';
import Board from '../components/Board';
import Constants from '../components/constants/Constants';
import Tile from '../components/Tile';

describe('Board works fine when', () => {
    beforeEach(() => {
        render(<Board/>)
    });
    
    it('should render board component' , () => {
        const boardComponent = screen.getByTestId('board');
        expect(boardComponent).toBeInTheDocument();
    });

    it('should render 3x3 tiles' , () => {
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
    });

});