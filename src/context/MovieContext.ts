import { IMovie } from "./../components/Movie";
import { createContext } from "react";

interface IMovieContext {
  movies: IMovie[];
  loading: boolean;
  error: string;
  keyword: string | null;
  setKeyword: (keyword: string) => void;
}

export const MovieContext = createContext({} as IMovieContext);
