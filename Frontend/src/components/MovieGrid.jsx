import MovieCard from "./MovieCard";

function MovieGrid({
  movies,
  setSelectedMovie,
  toggleWatchlist,
  watchlist
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {movies.length > 0 ? (

        movies.map((movie) => (

          <MovieCard
            key={movie.id}
            movie={movie}
            setSelectedMovie={setSelectedMovie}
            toggleWatchlist={toggleWatchlist}
            watchlist={watchlist}
          />

        ))

      ) : (

        <p className="text-white text-lg col-span-full text-center">
          No movies found.
        </p>

      )}

    </div>
  );
}

export default MovieGrid;