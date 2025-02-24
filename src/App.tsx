import { useEffect, useState } from "react";
import Header from "./components/Header";
import Movie, { IMovie } from "./components/Movie";
import axios from "axios";

interface IApiResponse {
  Search: IMovie[];
}

export default function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState('')
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    axios.get<IApiResponse>('https://www.omdbapi.com/?apikey=4ac3cdbc&s=man')
      .then(response => {
        setMovies(response.data.Search)
        setFilteredMovies(response.data.Search)
      }).catch(e => {
        setError(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  function filterMovie() {
    if (keyword == '') {
      setFilteredMovies(movies)
    }

    const data = movies.filter(movie => movie.Title.toLowerCase().includes(keyword.toLowerCase()))
    setFilteredMovies(data)
  }

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>
  }

  if (error) {
    return <div className="text-center mt-8">{error}</div>
  }

  return (
    <>
      <Header keyword={keyword} setKeyword={setKeyword} onSubmit={filterMovie} />

      <div className="flex gap-4 flex-wrap my-8 justify-center items-center m-auto w-2/3">
        {filteredMovies.map((movie, id) => {
          return (
            <Movie movie={movie} key={id} />
          )
        })}
      </div>
    </>
  )
}