import { ReactNode, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { IMovie } from "../components/Movie";
import axios from "axios";

interface IApiResponse {
  Search: IMovie[];
  totalResults: string;
  Response: string;
  Error?: string
}

export default function MovieProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string | null>('man')
  const [error, setError] = useState('')

  useEffect(() => {
    if (keyword === null) return;

    axios.get<IApiResponse>(`https://www.omdbapi.com/?apikey=4ac3cdbc&s=${keyword}`)
      .then(response => {
        if (response.data.Response === 'False') {
          throw new Error(response.data.Error)
        }

        setMovies(response.data.Search)
      }).catch(e => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [keyword])

  return (
    <MovieContext.Provider value={{ movies, loading, error, keyword, setKeyword }}>
      {children}
    </MovieContext.Provider>
  )
}