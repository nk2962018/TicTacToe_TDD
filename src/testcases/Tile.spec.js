import { render, screen } from "@testing-library/react";
import Tile from "../components/Tile";

describe("The Fizzbuzz component works fine when", () => {
  beforeEach(() => {
      render(<Tile value='tileText'/>);
  });

    it("should have one tile", () => {
      const tile = screen.getByTestId("tileText");
      expect(tile).toBeInTheDocument();
    });
    
    it("should have the proper text of tile", () => {
        const tileText = screen.getByTestId("tileText");
        expect(tileText).toHaveTextContent("tileText");
    });
});
