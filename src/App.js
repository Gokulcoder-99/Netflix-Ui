import React from "react";
import { Route, Routes } from "react-router-dom";
import Netflix from "./pages/Netflix";
import Siginup from "./pages/Siginup";
import Login from "./pages/Login";
import Player from "./pages/Player";
import UserListedMovies from "./pages/UserListedMovies";
import MoviePage from "./pages/Movies";
import TVShows from "./pages/TVShows";
function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Siginup />} />
      <Route exact path="/" element={<Netflix />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/tv" element={<TVShows />} />
      <Route exact path="/movies" element={<MoviePage />} />
      <Route exact path="/new" element={<Player />} />
      <Route exact path="/mylist" element={<UserListedMovies />} />
    </Routes>
  );
}

export default App;
