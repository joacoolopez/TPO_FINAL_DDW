import { Navigate, Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layout";
import { Dashboard, FilmDetails, Favorites } from "../pages/dashboard";

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="favoritos" element={<Favorites />} />
        <Route path="/peliculas/:name/:id" element={<FilmDetails />} />
        <Route path="/series/:name/:id" element={<FilmDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
