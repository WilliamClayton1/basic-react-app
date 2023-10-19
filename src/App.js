import './App.css';
import Button from "./components/Button";
import MovieCard from "./components/MovieCard";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <h1>I am a header one tag</h1>
        <h2>I am a header two tag</h2>
        <button type={"submit"}>button</button>
        <Button text={"Using Props"}/>

      {/*{*/}
      {/*  movies.map((movie) => {*/}
      {/*    <MovieCard title={movie.title} year={movie.year}/>*/}
      {/*  })*/}
      {/*}*/}
    </div>
  );
}

export default App;
