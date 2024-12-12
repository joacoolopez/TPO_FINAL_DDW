import { createContext, useEffect, useState } from "react";
import { getData } from "../helpers/";

// const { VITE_API_URL } = getEnvVariables();

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || false
  );
  
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [favoritesMovies, setFavoritesMovies] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  
  const [imageHome, setImageHome] = useState("");
  
  const [selected, setSelected] = useState("");
  const [dataMovieDashboard, setDataMovieDashboard] = useState();


  useEffect(() => {
    const getDataMovieDashboard = async () => {
      const data = await getData(
        "https://api.themoviedb.org/3/find/thegodfather?external_source=facebook_id&language=es-ES"
      );
      // console.log({ data });
      setDataMovieDashboard(data.movie_results[0]);
    };
    getDataMovieDashboard();
  }, []);

  useEffect(() => {
    const getImageMovie = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/238/images`
      );
      // console.log({ data });
      setImageHome(data.backdrops[1].file_path);
    };
    getImageMovie();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=2`
      );
      // console.log({ data });
      setPopularMovies(data.results);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/top_rated?language=es-ES`
      );
      // console.log({ data });
      setTopRatedMovies(data.results);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=3`
      );
      // console.log({ data });
      setUpcomingMovies(data.results);
    };
    getMovies();
  }, []);

  useEffect(() => {
    const getSeries = async () => {
      const data = await getData(
        `https://api.themoviedb.org/3/tv/top_rated?language=es-ES&page=1'`
      );
      // console.log({ data });
      setTopRatedSeries(data.results);
    };
    getSeries();
  }, []);

  const handleAuth = (user) => {
    setAuth(user);
  };

  const handleFavoritesMovies = (movie) => {
    // console.log({ movie });

    const isFavorite = favoritesMovies.some(
      (favoriteMovie) => favoriteMovie.id === movie.id
    );

    if (!isFavorite) {
      const updatedFavorites = [...favoritesMovies, movie];
      // console.log({updatedFavorites})
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavoritesMovies(updatedFavorites);
    } else {
      const updatedFavorites = favoritesMovies.filter(
        (favoriteMovie) => favoriteMovie.id !== movie.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavoritesMovies(updatedFavorites);
    }
  };

  const handleSelected = (value) => {
    setSelected(value);
    localStorage.setItem("selected", JSON.stringify(value));
  };



  return (
    <UserContext.Provider
      value={{
        auth,
        dataMovieDashboard,
        handleAuth,
        handleSelected,
        imageHome,
        popularMovies,
        handleFavoritesMovies,
        selected,
        topRatedMovies,
        topRatedSeries,
        upcomingMovies,
        favoritesMovies
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
