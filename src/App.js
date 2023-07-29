import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {

   const [access, setAccess] = useState(false)
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'contra1';
   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   const onLogout = () => {
      setAccess(false);
      navigate('/');
   }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
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
         {location.pathname !== '/' && access && <Nav onLogout = {onLogout} onSearch={onSearch} />}

         {/* Render Routes */}
         <Routes>
            <Route path='/' element={<Form login= {login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>

      </div>
   );
}

export default App;
