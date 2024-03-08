import React from 'react';
import { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav/Nav";
import About from './view/About/About';
import Detail from './view/Detail/Detail';
import Error from './view/Error';
import Landing from './view/Landing/Landing';
import Favorites from './components/Favorites/Favorites'
import Home from './view/Home/Home';

function App() {

   const [characters, setCharacters] = useState([]);
   const location = useLocation(); 



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
         alert("Cannot add characters repeats")
      }
      
   }

   const onClose = (id)=>{
      let chara = []
      characters.map(char =>{
         if (char.id !== id) {
             return chara.push(char)
         } 
         return chara
      })
      setCharacters(chara);
   }
 
    return (
      <div className='App'>
         {location.pathname !== "/" && <Nav />}
         <Routes>
            <Route path='/home' element={<Home  characters={characters} onClose={onClose} onSearch={onSearch}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path="/" element={<Landing />}/>
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='*' element={<Error/>}/>
         </Routes>

      </div>
   );
}

export default App;
