import MovieGrid from "./MovieGrid";

function Section({ title, movies }) {

  return (
    <div className="mt-10">

      <h2 className="text-yellow-400 text-xl font-semibold mb-5">

        {title}

      </h2>

      <MovieGrid movies={movies} />

    </div>
  );

}

export default Section;