import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {

  const newestMovies = [
    {
      title: "Avengers Endgame",
      genre: "Action",
      year: 2019,
      rating: 8.5,
      image: "https://picsum.photos/250/350?1"
    },
    {
      title: "Batman",
      genre: "Action",
      year: 2022,
      rating: 7.9,
      image: "https://picsum.photos/250/350?2"
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      rating: 8.7,
      image: "https://picsum.photos/250/350?3"
    },
    {
      title: "Titanic",
      genre: "Romance",
      year: 1997,
      rating: 7.8,
      image: "https://picsum.photos/250/350?4"
    },
    {
      title: "Joker",
      genre: "Drama",
      year: 2019,
      rating: 8.4,
      image: "https://picsum.photos/250/350?5"
    }
  ];

  const trendingMovies = [
    {
      title: "Avatar",
      genre: "Fantasy",
      year: 2022,
      rating: 7.6,
      image: "https://picsum.photos/250/350?6"
    },
    {
      title: "John Wick",
      genre: "Action",
      year: 2023,
      rating: 8.0,
      image: "https://picsum.photos/250/350?7"
    },
    {
      title: "Dune",
      genre: "Sci-Fi",
      year: 2021,
      rating: 8.2,
      image: "https://picsum.photos/250/350?8"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-800 p-10">

      <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl p-8 shadow-2xl">

        <Navbar />

        <div className="flex justify-between items-center mt-10">

          <h1 className="text-4xl text-yellow-400 font-bold">
            Movies
          </h1>

          <select className="bg-slate-800 border border-yellow-400 rounded-full px-5 py-2 text-white">
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Romance</option>
          </select>

        </div>

        <Section title="Newest Movies" movies={newestMovies} />

        <Section title="Trending Movies" movies={trendingMovies} />

      </div>

    </div>
  );
}

export default App;