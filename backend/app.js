import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const movies = [
  {
      id: 1,
      title: "Avengers Endgame",
      genre: "Action",
      year: 2019,
      director: "Anthony Russo",
      rating: 8.5,
      synopsis: "The Avengers assemble one final time to defeat Thanos.",
      cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
      image: "https://picsum.photos/250/350?1"
    },
    {
      id: 2,
      title: "Batman",
      genre: "Action",
      year: 2022,
      director: "Matt Reeves",
      rating: 7.9,
      synopsis: "Batman investigates corruption in Gotham City.",
      cast: ["Robert Pattinson", "Zoë Kravitz"],
      image: "https://picsum.photos/250/350?2"
    },
    {
      id: 3,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      director: "Christopher Nolan",
      rating: 8.7,
      synopsis: "Explorers travel through a wormhole in space.",
      cast: ["Matthew McConaughey", "Anne Hathaway"],
      image: "https://picsum.photos/250/350?3"
    },
    {
      id: 4,
      title: "Titanic",
      genre: "Romance",
      year: 1997,
      director: "James Cameron",
      rating: 7.8,
      synopsis: "A love story aboard the Titanic.",
      cast: ["Leonardo DiCaprio", "Kate Winslet"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-Ji2gTq0uacV-LOJn6W0b9GP5zGt4CYEzTIMAg25WQ&s=10"
    },
    {
      id: 5,
      title: "Joker",
      genre: "Drama",
      year: 2019,
      director: "Todd Phillips",
      rating: 8.4,
      synopsis: "Arthur Fleck becomes the Joker.",
      cast: ["Joaquin Phoenix"],
      image: "https://picsum.photos/250/350?5"
    }
];

// Home
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// GET all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// GET movie by id
app.get("/movies/:id", (req, res) => {
  const id = Number(req.params.id);

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  res.json(movie);
});

// POST movie
app.post("/movies", (req, res) => {
  const { title, genre, year, director, synopsis, rating, cast, image } = req.body;

  if (!title || !genre || !year || !director || !synopsis) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  const normalizedTitle = typeof title === "string" ? title.trim() : "";
  const imageSeed = normalizedTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "movie";

  const newMovie = {
    id: movies.length + 1,
    title,
    genre,
    year,
    director,
    synopsis,
    rating: Number(rating) || 0,
    cast: Array.isArray(cast) && cast.length > 0 ? cast : ["Unknown Cast"],
    image: image || `https://picsum.photos/seed/${imageSeed}/250/350`,
  };

  movies.push(newMovie);

  res.status(201).json({
    message: "Movie added successfully",
    movie: newMovie,
  });
});

// DELETE movie
app.delete("/movies/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = movies.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  movies.splice(index, 1);

  res.json({
    message: "Movie deleted successfully",
  });
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});