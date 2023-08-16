import { useState } from "react";
import styles from './SearchBar.module.css'
import {FaPlus} from 'react-icons/fa6'

export default function SearchBar({onSearch}) {
   //create a local state called id
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value);
    }

   return (
      <div className={styles['search-bar']}>
         <input className={styles['search-input']} placeholder= 'Ingrese el ID del personaje' value={id} onChange={handleChange} type='search' />
         <button className={styles['search-button']} onClick={() => onSearch(id)}>
            <FaPlus />
         </button>
      </div>
   );
}
