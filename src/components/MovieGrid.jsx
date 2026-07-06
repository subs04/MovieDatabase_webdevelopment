import MovieCard from "./MovieCard";

function MovieGrid() {
  return (
    <div className="grid">
      <MovieCard
        title="Avengers: Endgame"
        genre="Action"
        year="2019"
        rating={8.4}
      />

      <MovieCard
        title="Titanic"
        genre="Romance"
        year="1997"
        rating={7.9}
      />

      <MovieCard
        title="Joker"
        genre="Drama"
        year="2019"
        rating={8.5}
      />

      <MovieCard
        title="The Room"
        genre="Drama"
        year="2003"
        rating={3.7}
      />

      <MovieCard
        title="Frozen"
        genre="Animation"
        year="2013"
        rating={7.5}
      />
    </div>
  );
}

export default MovieGrid;