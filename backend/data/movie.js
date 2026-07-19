import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
    {
        title:{ 
            type: String,
            required: true, 
            trim: true
        },
        
        genre:{ 
            type: String, 
            required: true,
            trim: true
        },
        year: { 
            type: Number, 
            required: true,
            trim: true
         },
        director: { 
            type: String, 
            required: true,
            trim: true
        },
        synopsis: {
             type: String, 
             required: true,
             trim: true
         },
        rating: { 
            type: Number, 
            required: true,
            trim: true},
        cast: { 
            type: [String], 
            required: true,
            trim: true
        }
    });

  const Movie = mongoose.model("Movie", movieSchema);

  export default Movie;  