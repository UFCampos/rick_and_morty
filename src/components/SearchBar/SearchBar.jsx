import { useState } from "react";

export default function SearchBar({onSearch}) {
   //create a local state called id
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value);
    }

   return (
      <div>
         <input placeholder= 'Ingrese el ID del personaje' value={id} onChange={handleChange} type='search' />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
