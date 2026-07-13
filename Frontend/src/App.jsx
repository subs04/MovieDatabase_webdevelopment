import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import MovieDetail from "./components/MovieDetail";
import AddMovieForm from "./components/AddMovieForm";

function App() {

  // Movie State
  const [movies, setMovies] = useState([]);

  // Selected Movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Watchlist
  const [watchlist, setWatchlist] = useState([]);

  // Search
  const [search, setSearch] = useState("");

  // Dashboard
  const [totalMovies, setTotalMovies] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch("http://localhost:3000/api/movies");

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Failed to load movies:", error);
      }
    }

    fetchMovies();
  }, []);

  // Dashboard calculation
  useEffect(() => {

    setTotalMovies(movies.length);

    let total = 0;

    movies.forEach(movie => {
      total += movie.rating;
    });

    if (movies.length > 0) {
      setAverageRating((total / movies.length).toFixed(1));
    }

  }, [movies]);

  // Add Movie
  async function addMovie(movie) {
    try {
      const response = await fetch("http://localhost:3000/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to add movie");
      }

      setMovies([...movies, result.movie]);
    } catch (error) {
      console.error("Failed to add movie:", error);
      alert(error.message);
    }
  }

  // Watchlist
  function toggleWatchlist(movie) {

    const exists = watchlist.find(item => item.id === movie.id);

    if (exists) {

      setWatchlist(
        watchlist.filter(item => item.id !== movie.id)
      );

    } else {

      setWatchlist([...watchlist, movie]);

    }

  }

  // Search Filter
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-slate-800 p-10">

      <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl p-8">

        <Navbar
          search={search}
          setSearch={setSearch}
        />

        {/* Dashboard */}

        <div className="flex gap-10 mt-8 text-yellow-400 font-semibold">

          <h2>Total Movies : {totalMovies}</h2>

          <h2>Average Rating : {averageRating}</h2>

          <h2>Watchlist : {watchlist.length}</h2>

        </div>

        <AddMovieForm addMovie={addMovie} />

        <Section
  title="Movies"
  movies={filteredMovies}
  setSelectedMovie={setSelectedMovie}
  toggleWatchlist={toggleWatchlist}
  watchlist={watchlist}
/>
 {watchlist.length > 0 && (

  <Section
    title="My Watchlist"
    movies={watchlist}
    setSelectedMovie={setSelectedMovie}
    toggleWatchlist={toggleWatchlist}
    watchlist={watchlist}
  />

)}

        {selectedMovie && (

        <MovieDetail
    movie={selectedMovie}
    setSelectedMovie={setSelectedMovie}
/>

        )}

      </div>

    </div>

  );

}

export default App;