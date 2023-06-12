import { render, screen } from "@testing-library/react";
import Tile from "../components/Tile";

it("should have one tile", () => {
  render(<Tile value='tileText'/>);
  const tile = screen.getByTestId("tileText");
  expect(tile).toBeInTheDocument();
});

it("should have the proper text of tile", () => {
    render(<Tile value="tileText" />);
    const tileText = screen.getByTestId("tileText");
    expect(tileText).toHaveTextContent("tileText");
});