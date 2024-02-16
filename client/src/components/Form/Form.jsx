import React, { useState } from "react"
import style from './Form.module.css'
import validation from "./validation";

const Form = (props) => {
    const [userData, setUserData] = useState({email:"", password:""});
    const [errors, setErrors] = useState({});

    function handleChange(event){
        setUserData({...userData, [event.target.name]:event.target.value})
        setErrors(validation({...userData, [event.target.name]:event.target.value}))
    }

    function handleSubmit(event){
         event.preventDefault();   
         props.login(userData)
    }

    return (
        
        <div className={style.containerForm}>
            <form onSubmit={handleSubmit}>
                <div className={style.containerFormInside}>
                    <label>Email</label>
                    <input className={style.input} type="text" name="email" onChange={handleChange} value={userData.email}/>
                    {errors.email ? <span style={{color:"red"}} >{errors.email}</span>:null}
                    <label>Password</label>
                    <input className={style.input} type="password" name="password" onChange={handleChange} value={userData.password}/>
                    {errors.password ? <span style={{color:"red"}} >{errors.password}</span>:null}
                    <input className={style.button} type="submit" value="Login"/>
               </div>
                
            </form>
        </div>
    )
}

export default Form