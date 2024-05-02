import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Navbar() {
  return (
    <nav id="navigation">
        <div id="menu">
            <button className="navBtn" id="moviesBtn">Movies</button>
            <button className="navBtn" id="tvShowsBtn">TV Shows</button>
        </div>
    </nav>
  )
}
