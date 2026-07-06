import MovieGrid from "./MovieGrid";

function Section({
  title,
  movies,
  setSelectedMovie,
  toggleWatchlist,
  watchlist
}) {

  return (

    <div className="mt-10">

      <h2 className="text-yellow-400 text-2xl font-bold mb-5">
        {title}
      </h2>

      <MovieGrid
        movies={movies}
        setSelectedMovie={setSelectedMovie}
        toggleWatchlist={toggleWatchlist}
        watchlist={watchlist}
      />

    </div>

  );

}

export default Section;