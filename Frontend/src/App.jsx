import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import MovieDetail from "./components/MovieDetail";
import AddMovieForm from "./components/AddMovieForm";

function App() {

  // Movie State
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Avengers Endgame",
      genre: "Action",
      year: 2019,
      director: "Anthony Russo",
      rating: 8.5,
      synopsis: "The Avengers assemble one final time to defeat Thanos.",
      cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
      image: "https://picsum.photos/250/350?1"
    },
    {
      id: 2,
      title: "Batman",
      genre: "Action",
      year: 2022,
      director: "Matt Reeves",
      rating: 7.9,
      synopsis: "Batman investigates corruption in Gotham City.",
      cast: ["Robert Pattinson", "Zoë Kravitz"],
      image: "https://picsum.photos/250/350?2"
    },
    {
      id: 3,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      director: "Christopher Nolan",
      rating: 8.7,
      synopsis: "Explorers travel through a wormhole in space.",
      cast: ["Matthew McConaughey", "Anne Hathaway"],
      image: "https://picsum.photos/250/350?3"
    },
    {
      id: 4,
      title: "Titanic",
      genre: "Romance",
      year: 1997,
      director: "James Cameron",
      rating: 7.8,
      synopsis: "A love story aboard the Titanic.",
      cast: ["Leonardo DiCaprio", "Kate Winslet"],
      image: "https://picsum.photos/250/350?4"
    },
    {
      id: 5,
      title: "Joker",
      genre: "Drama",
      year: 2019,
      director: "Todd Phillips",
      rating: 8.4,
      synopsis: "Arthur Fleck becomes the Joker.",
      cast: ["Joaquin Phoenix"],
      image: "https://picsum.photos/250/350?5"
    }
  ]);

  // Selected Movie
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Watchlist
  const [watchlist, setWatchlist] = useState([]);

  // Search
  const [search, setSearch] = useState("");

  // Dashboard
  const [totalMovies, setTotalMovies] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

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
  function addMovie(movie) {

    setMovies([...movies, movie]);

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