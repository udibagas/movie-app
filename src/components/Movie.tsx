export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export default function Movie({ movie }: { movie: IMovie }) {
  return (
    <div className="w-[200px]">
      <img src={movie.Poster} alt="" className="w-[200px] h-64 object-cover" />
      <div className=" bg-slate-900 text-slate-50 p-4 line-clamp-1">{movie.Title}</div>
    </div>
  )
}