import React from "react";
import {Link} from 'react-router-dom'
import SearchBar from "./SearhBar/SearchBar";
import style from './Nav.module.css'

const Nav = (props)=>{
    return(
        <div>
            <h1 className={style.title}>Rick and Morty</h1>
            <SearchBar onSearch={props.onSearch}/>
            <Link to='/about'>
                <button className={style.buttonNav}>About</button>
            </Link>
            <Link to='/home'>
                <button className={style.buttonNav}>Home</button>
            </Link>
            <Link to="/favorites">
                <button className={style.buttonNav}>Favorites</button>
            </Link>
            <button className={style.buttonNav} onClick={()=>props.logOut()}>Log Out</button>
        </div>
    ) 
}

export default Nav