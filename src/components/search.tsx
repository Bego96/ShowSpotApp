import { IoSearchOutline } from "react-icons/io5";
export default function Search() {
  return (
    <div id="searchContainer">
        <input type="text" id="searchBar" placeholder='Search...'/>
        <IoSearchOutline id="searchIcon" color="white" size={22}/>
    </div>
  )
}
