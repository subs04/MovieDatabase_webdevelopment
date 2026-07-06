import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {

  return (

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {movies.map((movie, index) => (

        <MovieCard key={index} movie={movie} />

      ))}

    </div>

  );

}

export default MovieGrid;