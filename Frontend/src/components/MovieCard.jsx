function MovieCard({
  movie,
  setSelectedMovie,
  toggleWatchlist,
  watchlist
}) {

  // Check if movie is already in watchlist
  const isInWatchlist = watchlist.some(
    (item) => item.id === movie.id
  );

  // Rating badge color
  let badgeColor = "";

  if (movie.rating >= 8) {
    badgeColor = "bg-green-500";
  } else if (movie.rating >= 5) {
    badgeColor = "bg-yellow-500";
  } else {
    badgeColor = "bg-red-500";
  }

  return (

    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300">

      {/* Movie Image */}
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-72 object-cover cursor-pointer"
        onClick={() => setSelectedMovie(movie)}
      />

      <div className="p-4">

        {/* Movie Title */}
        <h2
          className="text-white text-lg font-bold cursor-pointer hover:text-yellow-400"
          onClick={() => setSelectedMovie(movie)}
        >
          {movie.title}
        </h2>

        {/* Genre */}
        <p className="text-gray-400 mt-2">
          Genre : {movie.genre}
        </p>

        {/* Year */}
        <p className="text-gray-400">
          Year : {movie.year}
        </p>

        {/* Director */}
        <p className="text-gray-400">
          Director : {movie.director}
        </p>

        {/* Rating Badge */}
        <span
          className={`${badgeColor} inline-block px-3 py-1 rounded-full text-white mt-3`}
        >
          ⭐ {movie.rating}
        </span>

        {/* Watchlist Button */}
        <button
          onClick={() => toggleWatchlist(movie)}
          className={`w-full mt-4 py-2 rounded-lg font-semibold transition ${
            isInWatchlist
              ? "bg-red-500 hover:bg-red-600"
              : "bg-yellow-400 hover:bg-yellow-500 text-black"
          }`}
        >
          {isInWatchlist
            ? "Remove from Watchlist"
            : "Add to Watchlist"}
        </button>

      </div>

    </div>

  );
}

export default MovieCard;