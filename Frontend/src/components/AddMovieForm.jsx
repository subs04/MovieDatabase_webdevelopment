import { useState } from "react";

function AddMovieForm({ addMovie }) {

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [rating, setRating] = useState("");
  const [synopsis, setSynopsis] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (
      title === "" ||
      genre === "" ||
      year === "" ||
      director === "" ||
      rating === "" ||
      synopsis === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newMovie = {
      id: Date.now(),
      title,
      genre,
      year: Number(year),
      director,
      rating: Number(rating),
      synopsis,
      cast: ["Unknown Cast"],
      image: `https://picsum.photos/250/350?random=${Date.now()}`
    };

    addMovie(newMovie);

    // Clear form
    setTitle("");
    setGenre("");
    setYear("");
    setDirector("");
    setRating("");
    setSynopsis("");
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 mt-10 p-6 rounded-2xl"
    >

      <h2 className="text-2xl font-bold text-yellow-400 mb-6">
        Add Movie
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white outline-none"
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white outline-none"
        />

        <input
          type="number"
          step="0.1"
          min="0"
          max="10"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white outline-none"
        />

      </div>

      <textarea
        placeholder="Movie Synopsis"
        value={synopsis}
        onChange={(e) => setSynopsis(e.target.value)}
        rows="4"
        className="w-full mt-4 p-3 rounded bg-slate-700 text-white outline-none"
      ></textarea>

      <button
        type="submit"
        className="mt-5 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
      >
        Add Movie
      </button>

    </form>

  );

}

export default AddMovieForm;