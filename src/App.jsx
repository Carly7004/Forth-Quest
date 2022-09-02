import { useState } from "react";
import MovieContext from "./components/ContextApi/context/MovieContext";
import UserContext from "./components/ContextApi/context/UserContext";
import MovieList from "./components/ContextApi/Movie/MovieList";
import UserProfile from "./components/ContextApi/User/UserProfile";
import ControlledForm from "./components/ControIledForm/ControlledForm";

function App() {
  const [isOnline, setIsOnline] = useState(true)
  const [movies, setMovies] = useState([
    {
      movie_id: 1,
      title: "Harry Potter and the Sorcerers Stone",
      release_year: 2001,
    },
    {
      movie_id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      release_year: 2002,
    },
    {
      movie_id: 3,
      title: "Harry Potter and the Prison of Azkaban",
      release_year: 2004,
    },
  ]);
  return (
    <div className="App">
      {/* after creating Context component with createContext you will have access to context provider,
      use this provider to wrap the component you want to apply the useContext hook on */}
      <MovieContext.Provider value={{ movies, setMovies }}>
        <MovieList />
      </MovieContext.Provider>
      {/* with context provide here we are passing the state as a value to be use on the MovieList component */}
      <UserContext.Provider value={{ isOnline, setIsOnline }}>
        <UserProfile/>
      </UserContext.Provider>
      <br/>
      <br/>
      <br/>
      <ControlledForm/>
    </div>
  );
}

export default App;
