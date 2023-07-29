import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from "react-router-dom"

export default function Nav({onSearch, onLogout}) {
    return (
        <div>
            <button><NavLink to = {'/about'}>About</NavLink></button>
            <button><NavLink to = {'/home'}>Home</NavLink></button>
            <button onClick={onLogout}>Logout</button>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}