import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import Menu from '../pages/menu/Menu';
import { films } from "../data/dataFilms";
import { actors } from "../data/dataActors";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/menuFilm" element={<Menu items={films} />} />
      <Route path="/menuActeur" element={<Menu items={actors} />} />
    </Routes>
  );
}