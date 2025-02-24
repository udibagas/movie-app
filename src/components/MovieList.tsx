import Movie from "./Movie";
import useMovie from "../hooks/useMovie";

export default function MovieList() {
  const { movies, loading, error } = useMovie()

  if (loading) {
    return <div className="text-center mt-8 text-slate-50">Loading...</div>
  }

  if (error) {
    return <div className="text-center mt-8 text-slate-50">{error}</div>
  }

  return (
    <div className="flex gap-4 flex-wrap my-8 justify-center items-center m-auto lg:w-2/3 md:w-5/6 sm:w-11/12">
      {movies.map((movie, id) => <Movie movie={movie} key={id} />)}
    </div>
  )
}