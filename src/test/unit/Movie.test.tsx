import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Movie from "../../components/Movie";

const movie = {
  "Title": "Iron Man",
  "Year": "2008",
  "imdbID": "tt0371746",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
};

test("Render Movie component", () => {
  render(<Movie movie={movie} />);
  const el = screen.getByText('Iron Man')
  expect(el).toBeInTheDocument()
});