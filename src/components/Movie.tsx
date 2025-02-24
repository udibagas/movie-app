export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export default function Movie({ movie }: { movie: IMovie }) {
  return (
    <div className="w-[200px] rounded-lg overflow-hidden shadow-lg">
      <img src={movie.Poster} alt="" className="w-[200px] h-64 object-cover" />
      <div className="bg-slate-900 text-slate-50 p-4 h-[80px]">{movie.Title}</div>
    </div>
  )
}