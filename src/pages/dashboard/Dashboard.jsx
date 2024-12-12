/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { DashboardRow, Spinner } from "../../components";
import { UserContext } from "../../context/UserProvider";

export const Dashboard = () => {
  const {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    topRatedSeries,
  } = useContext(UserContext);
  const [totalMovies, setTotalMovies] = useState([]);

  // console.log({ dataMovieDashboard });

  useEffect(() => {

      setTotalMovies([
        { id: 1, title: "Populares", movies: popularMovies },
        { id: 2, title: "Mas valoradas", movies: topRatedMovies },
        { id: 3, title: "Series mas premiadas", movies: topRatedSeries },
        { id: 4, title: "Próximamente", movies: upcomingMovies },
      ]);
  }, [
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    topRatedSeries,
  ]);

  return (
    <>
      <div className="container px-10 py-10 mx-auto">
        {totalMovies.map((movie) => (
          <DashboardRow key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};
