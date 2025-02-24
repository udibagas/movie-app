import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export default () => {
  return useContext(MovieContext);
};
