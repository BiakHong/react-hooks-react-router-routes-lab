import React from "react";
import { actors } from "../data";

function Actors() {
  const theActor = actors.map((act)=>{
    return <div key={act.name}>
      <h2>{act.name}</h2>
      <ul>
        {act.movies.map((mv)=>(
          <li key={mv}> {mv}</li>
        ))}
      </ul>
    </div>
  })
  return <div>
    <h1>Actors Page</h1>
    {theActor}
  </div>;
}

export default Actors;
