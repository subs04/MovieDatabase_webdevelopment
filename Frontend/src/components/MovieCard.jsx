function MovieCard({ movie }) {

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

      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">

        <h3 className="text-white font-bold text-lg">

          {movie.title}

        </h3>

        <p className="text-gray-400">

          {movie.genre}

        </p>

        <p className="text-gray-400">

          {movie.year}

        </p>

        <span className={`${badgeColor} text-white px-3 py-1 rounded-full inline-block mt-3`}>

          ⭐ {movie.rating}

        </span>

      </div>

    </div>

  );

}

export default MovieCard;