import React from "react";
import { useState } from "react";
import style from "./Search.module.css"

export default function SearchBar(props) {
   //La particulariodad del estado es que puede redenderizar
   const [id,setId] = useState("")
   
   const inputId = (event)=>{
      setId(event.target.value)
   }

   return (
      <div className={style.divSearch}>
         {/* HTLM que atributos resive el input */}
         {/* value={id.toLocaleUpperCase()}  puede tener esa propiedad, y aveces es necesario, porque se pueden hacer cosas, como por ejemplo, cambiar todo en mayusculas*/}
         <input className={style.inputSearch} type='search' placeholder="Buscar o agregar..." onChange={inputId} />
          {/*Cuando se ejecuta solamente con onSearch{id} se ejecuta automaticamente en el renderizado porque busca asignarle valor al onClick, en cambio si lo ejecutas por referencia, osea dentro de una funcion de la siguiente manera ()=>props.onSearch{id} solamente esa funcion se ejecutara cuando se le haga clicl, porque no estava siendo invocada  */}
         <button className={style.buttonSearch} onClick={()=>props.onSearch(id)}>Agregar</button>
         <button className={style.buttonSearch} onClick={()=>props.onSearch(Math.floor(Math.random()*826)+1)}>Random</button>
      </div>
   );
}
