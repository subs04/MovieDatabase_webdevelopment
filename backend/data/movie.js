import moongose from "mongoose";

const movieSchema =moongose.Schema(
    {
        title:{ 
            type: String,
            required: true },
        genre:{ 
            type: String, 
            required: true },
        year: { 
            type: Number, 
            required: true },
        director: { 
            type: String, 
            required: true },
        synopsis: {
             type: String, 
             required: true },
        rating: { 
            type: Number, 
            required: true },
        cast: { 
            type: [String], 
            required: true }
    });

  const Movie = moongose.model("Movie", movieSchema);

  export default Movie;  