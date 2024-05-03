import { NavLink } from "react-router-dom";
import Search from "./search";
export default function Navbar() {
  return (
    <nav id="navigation">
        <div id="menu">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'navBtn')} id="moviesBtn">Movies</NavLink>
            <NavLink to="/TVShows" className={({ isActive }) => (isActive ? 'active' : 'navBtn')} id="tvShowsBtn">TV Shows</NavLink>
        </div>
        <Search/>
    </nav>
  )
}
