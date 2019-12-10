import React from "react";
import './App.scss'

const Movie = ({name, price}) => {

  return(
    <div className="movie">
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
};

export default Movie;
