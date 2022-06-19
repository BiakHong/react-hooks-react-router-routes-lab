import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((mv)=>(
    <div key={mv.title}>
      <h2>{mv.title}</h2>
      <h2>{mv.time}</h2>
      <ul>
        {mv.genres.map((genre)=>(
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>;
}

export default Movies;
