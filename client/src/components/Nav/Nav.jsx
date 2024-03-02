import React from "react";
import {Link} from 'react-router-dom'
import style from './Nav.module.css'

const Nav = ()=>{
    return(
        <div className={style.containerNav}>
            <h1 className={style.title}>Rick and Morty</h1>
            <Link to='/about'>
                <button className={style.buttonNav}>About</button>
            </Link>
            <Link to='/home'>
                <button className={style.buttonNav}>Home</button>
            </Link>
            <Link to="/favorites">
                <button className={style.buttonNav}>Favorites</button>
            </Link>
            <Link to="/">
                <button className={style.buttonNavExit}>Exit</button>
            </Link>
        </div>
    ) 
}
 
export default Nav