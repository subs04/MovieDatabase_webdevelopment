let movies = [
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
  }
];

let nextId = movies.length + 1;

function getAll() {
  return movies;
}

function getById(id) {
  return movies.find((m) => m.id === id) || null;
}

function create(data) {
  const newMovie = {
    id: nextId++,
    title: data.title,
    genre: data.genre,
    year: Number(data.year),
    director: data.director,
    synopsis: data.synopsis,
    rating: Number(data.rating) || 0,
    cast: Array.isArray(data.cast) && data.cast.length ? data.cast : ["Unknown Cast"],
    image: data.image || `https://picsum.photos/seed/${(data.title||'movie').toLowerCase().replace(/[^a-z0-9]+/g,'-')}/250/350`
  };

  movies.push(newMovie);
  return newMovie;
}

function removeById(id) {
  const idx = movies.findIndex((m) => m.id === id);
  if (idx === -1) return false;
  movies.splice(idx, 1);
  return true;
}

export default {
  getAll,
  getById,
  create,
  removeById,
};
