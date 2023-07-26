import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import { useState } from'react';

function App() { 
    const [characters, setCharacters] = useState([]);

    function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters((oldChars) => oldChars.filter((char) => char.id!== id));
   };
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters}
         onClose={onClose}
          />
      </div>
   );
}


export default App;
