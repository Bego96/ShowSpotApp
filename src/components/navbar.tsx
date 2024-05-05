import { NavLink } from "react-router-dom";
import Search from "./search";
export default function Navbar() {
  return (
    <nav id="navigation">
        <div id="menu">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'navBtn')} id="moviesBtn">TV Shows</NavLink>
            <NavLink to="/Movies" className={({ isActive }) => (isActive ? 'active' : 'navBtn')} id="tvShowsBtn">Movies</NavLink>
        </div>
    </nav>
  )
}
