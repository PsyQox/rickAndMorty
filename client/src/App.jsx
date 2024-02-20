import React from 'react';
import {useState, useEffect} from "react";
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav";
import About from './view/About/About';
import Detail from './view/Detail/Detail';
import Error from './view/Error';
import Landing from './view/Landing/Landing';
import Favorites from './components/Favorites/Favorites'
import axios from 'axios'
import Home from './view/Home/Home';

function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation(); //Hook react-roter-dom para saber la ubicación actual del lugar
   const [access,setAccess] = useState(true)
   
   const navigate = useNavigate();

   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home'); 
   //    }
   // }

   async function login(userData){
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         alert("El correo o la contraseña no esta correcta")
      }
      
      
   }

   function logOut(){
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = async (id) =>{
   let exist = false
   let idN = parseInt(id)

   characters.map(char=>{
      if (char.id === idN) {
         return exist = true
      }
      return exist
   })
      if (!exist) {
         // fetch(`https://rickandmortyapi.com/api/character/${id}`)
           try {
            const data = await fetch(`http://localhost:3001/rickandmorty/character/${id}`).then(res=>res.json()) 
            if (data.name) {
               setCharacters([...characters,data])
            }else{
               window.alert("No hay personajes con ese ID")
            }
           } catch (error) {
               window.alert("No hay personajes con ese ID")   
           }
            
         
      }else{
         window.alert("No se puede agregar repetidos")
      }
      
      //Esta destructurado porque es un objeto, so no seria respuesta.data
      // axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      //    if (data.name) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //    } else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // });    
   }

   const onClose = (id)=>{
      let chara = []
      // let idN = parseInt(id)
      // setCharacters([]);
      //Se puede hacer con un filter
      // console.log("entre", id);
      characters.map(char =>{
         if (char.id !== id) {
             return chara.push(char)
         }
         return chara
      })
      // let chara = characters.filter(char => char.id !== id)
      setCharacters(chara);
   }
 
    return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>}
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            {/* <Route path='/home' element={<Home />}/> */}
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path="/" element={<Landing login={login}/>}/>
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='*' element={<Error/>}/>
         </Routes>

      </div>
   );
}

export default App;
