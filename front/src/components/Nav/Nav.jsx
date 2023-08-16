import SearchBar from "../SearchBar/SearchBar";
import {NavLink} from "react-router-dom"
import styles from './Nav.module.css'
import { FaHouse, FaDice, FaRightFromBracket, FaHeart, FaGithub, FaH} from 'react-icons/fa6'

export default function Nav({onSearch, onLogout, addRandom}) {
    return (
        <div className={styles.navfix}>
            <div className={styles.navbar}>
                <div className={styles['navbar-nav']}>
                    <button className={styles['navbar-item']}><NavLink to={'/about'}>About Me</NavLink></button>
                    <button className={styles['navbar-item']}><NavLink to={'/home'}><FaHouse/></NavLink></button>
                    <button className={styles['navbar-item']}><NavLink to={'/favorites'}><FaHeart/></NavLink></button>
                    <button className={styles['navbar-item']} onClick={onLogout}><FaRightFromBracket/></button>
                    <button className={styles['navbar-item']} onClick={addRandom}><FaDice/></button>
                </div>
                <h1 className={styles.banner}>rick and morty cards lookup</h1>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}