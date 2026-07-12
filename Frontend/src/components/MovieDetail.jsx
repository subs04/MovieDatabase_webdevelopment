function MovieDetail({ movie, setSelectedMovie }) {
  const castList = Array.isArray(movie.cast) ? movie.cast : [];

  return (
    <div className="mt-10 bg-slate-800 rounded-2xl p-6 shadow-lg relative">

      {/* Close Button */}
      <button
        onClick={() => setSelectedMovie(null)}
        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
      >
        ✖
      </button>

      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        Movie Details
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <img
            src={movie.image || "https://picsum.photos/250/350?fallback"}
            alt={movie.title}
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="md:col-span-2 text-white">

          <h2 className="text-3xl font-bold">
            {movie.title}
          </h2>

          <p className="mt-3">
            <span className="text-yellow-400">Genre:</span> {movie.genre}
          </p>

          <p className="mt-2">
            <span className="text-yellow-400">Year:</span> {movie.year}
          </p>

          <p className="mt-2">
            <span className="text-yellow-400">Director:</span> {movie.director}
          </p>

          <p className="mt-2">
            <span className="text-yellow-400">Rating:</span> ⭐ {movie.rating}
          </p>

          <h3 className="text-xl font-bold text-yellow-400 mt-6">
            Synopsis
          </h3>

          <p className="mt-2 text-gray-300">
            {movie.synopsis}
          </p>

          <h3 className="text-xl font-bold text-yellow-400 mt-6">
            Cast
          </h3>

          <ul className="list-disc ml-6 mt-2 text-gray-300">
            {castList.length > 0 ? (
              castList.map((actor, index) => (
                <li key={index}>{actor}</li>
              ))
            ) : (
              <li>No cast information available.</li>
            )}
          </ul>

        </div>

      </div>

    </div>
  );
}

export default MovieDetail;