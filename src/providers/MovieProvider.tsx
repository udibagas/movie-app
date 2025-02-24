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

    async function fetchMovies() {
      setLoading(true)
      try {
        const url = `https://www.omdbapi.com/?apikey=4ac3cdbc&s=${keyword}`
        const response = await axios.get<IApiResponse>(url)
        setMovies(response.data.Search)
        setError('')
        if (response.data.Response === 'False') {
          throw new Error(response.data.Error)
        }
      } catch (error) {
        setError((error as Error).message)
      }

      setLoading(false)
    }

    fetchMovies();
  }, [keyword])

  return (
    <MovieContext.Provider value={{ movies, loading, error, keyword, setKeyword }}>
      {children}
    </MovieContext.Provider>
  )
}