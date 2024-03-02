import React from "react";
import { useState } from "react";
import style from "./Search.module.css"

export default function SearchBar(props) {
   //La particulariodad del estado es que puede redenderizar
   const [id,setId] = useState("")
   const [errors, setErrors] = useState({})

   // const inputId = (event)=>{
   //    setId(event.target.value)
   // }
   const onHandleChange = (event) => {
      setId(event.target.value)
      setErrors(validate(event.target.value))
      
   }

   const validate = (value) => {
      let incorrect = {}
      const regexId = RegExp(/^[0-9]*$/);

      if (!regexId.test(value)) {
         incorrect.id = "Only Numbers"
      }
      return incorrect
   }

   const onHandleSubmit = () => {
      if (!id) {
         alert("Enter a number");
      }else{
         props.onSearch(id)
      }
   }

   return (
      <>
      <div className={style.divSearch}>
         <input className={style.inputSearch} type='search' placeholder="Search or add character, please write a number... (1 - 826)" onChange={onHandleChange} value={id} />
         <button className={style.buttonSearch} onClick={()=>onHandleSubmit()}>Add</button>
         <button className={style.buttonSearch} onClick={()=>props.onSearch(Math.floor(Math.random()*826)+1)}>Random</button>
         <br />

      </div>
      {errors.id ? (<span className={style.spanError}>{errors.id}</span>):null}
      </>
   );
}
