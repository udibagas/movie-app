import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieProvider from "./providers/MovieProvider";


export default function App() {


  return (
    <MovieProvider>
      <Header />
      <MovieList />
    </MovieProvider>
  )
}