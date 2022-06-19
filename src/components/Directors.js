import React from "react";
import { directors } from "../data";

function Directors() {
  const theDirector= directors.map((director)=>(
    <div key={director.name}>
      {director.name}
      <ul>
        {director.movies.map((mv)=>(
          <li key={mv}>{mv}</li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {theDirector}
  </div>;
}

export default Directors;
