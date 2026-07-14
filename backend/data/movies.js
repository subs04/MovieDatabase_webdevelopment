import mongoose from "mongoose";
import movie from "./movie.js";
import dotenv from "dotenv";
dotenv.config({path: '.env'});

const movies = [
  {
  
    title: "Avengers Endgame",
    genre: "Action",
    year: 2019,
    director: "Anthony Russo",
    synopsis: "The Avengers unite to defeat Thanos and restore the universe.",
    rating: 8.5,
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
  },
  {
  
    title: "Batman",
    genre: "Action",
    year: 2022,
    director: "Matt Reeves",
    synopsis: "Batman investigates a series of murders in Gotham City.",
    rating: 7.9,
    cast: ["Robert Pattinson", "Zoë Kravitz"]
  },
  {
    
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    director: "Christopher Nolan",
    synopsis: "A team travels through a wormhole to save humanity.",
    rating: 8.7,
    cast: ["Matthew McConaughey", "Anne Hathaway"]
  },
  {
   
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    director: "James Cameron",
    synopsis: "A love story unfolds aboard the Titanic.",
    rating: 7.8,
    cast: ["Leonardo DiCaprio", "Kate Winslet"]
  },
  {
  
    title: "Joker",
    genre: "Drama",
    year: 2019,
    director: "Todd Phillips",
    synopsis: "Arthur Fleck slowly transforms into the Joker.",
    rating: 8.4,
    cast: ["Joaquin Phoenix"]
  }
];
const connection = mongoose.connect(process.env.MONGODB_URI,{});
await movie.deleteMany();
await movie.insertMany(movies);
export default movies;