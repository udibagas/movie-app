import { useEffect, useState } from "react";
import Header from "./components/Header";
import Movie, { IMovie } from "./components/Movie";
import axios from "axios";

interface IApiResponse {
  Search: IMovie[];
  totalResults: string;
  Response: string;
  Error?: string
}

export default function App() {
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

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  if (error) {
    return <div className="text-center mt-8">{error}</div>
  }

  return (
    <>
      <Header onSubmit={(value) => {
        console.log(value);

        if (value) {
          setKeyword(value)
        }
      }} />

      <div className="flex gap-4 flex-wrap my-8 justify-center items-center m-auto w-2/3">
        {movies.map((movie, id) => {
          return (
            <Movie movie={movie} key={id} />
          )
        })}
      </div>
    </>
  )
}