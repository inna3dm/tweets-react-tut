import React, {useState} from 'react';
import Tweet from './Tweet'
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext';
import './App.scss'

function App() {

  const [users, setUsers] = useState([
    {name: "Melisandre", message:"You are more then they could ever be. They are just foot soldiers in the great war. You will make kings rise and fall"},
    {name: "John Snow", message: "I am the true king"},
    {name: "Davos", message: "I know that a king protects his people, or he is no king at all"},
    {name: "Daenerys", message: "I'm no ordinary woman. My dreams come true"}
  ]);

  return(
    <MovieProvider>
      <div className="app">
        <div class="tweets">
          {users.map(user => (
            <Tweet name={user.name} message={user.message} />
          ))}
        </div>
        <div class="movies">
          <Nav />
          <AddMovie />
          <MovieList />
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;


