import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'


function App() {
   const URL_BASE = 'http://localhost:3001/rickandmorty/character/'

   const [access, setAccess] = useState(false)
   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const login = async (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`)

      const { access } = data;
      setAccess(data);

      access && navigate('/home');
      
   }

   const onLogout = () => {
      setAccess(false);
      navigate('/');
   }

   async function onSearch (id) {
      const characterExists = characters.some((char) => char.id === Number(id));

      if (characterExists) {
         return alert('Ya se añadió un personaje con este ID');
      }

      const { data } = await axios(`${URL_BASE}${id}`);
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   }

   const [loading, setLoading] = useState(false);

   const addRandom = async () => {
      if (loading){
         return;
      }

      setLoading(true);

      const { data } = await axios(`${URL_BASE}`)

      const randomCharacter = data[Math.floor(Math.random() * data.length)];
      const isDuplicate = characters.some((char) => char.id === randomCharacter.id);

      if (!isDuplicate) {
         setCharacters((oldChars) => [...oldChars, randomCharacter]);
      } else {
         addRandom();
      }

      setLoading(false);
    };

   const onClose = (id) => {
      setCharacters(
         characters.filter(char => {
            return char.id !== Number(id)
         })
      )
   };

   const location = useLocation();

   return (
      <div className='App'>
         {/* Render Nav only if we're not at path '/' */}
         {location.pathname !== '/' && access && <Nav onLogout = {onLogout} onSearch={onSearch} addRandom={addRandom}/>}

         {/* Render Routes */}
         <Routes>
            <Route path='/' element={<Form login= {login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>

      </div>
   );
}

export default App;
