import React from "react";
import style from './About.module.css'

const About = () =>{
    return(
        <div className={style.containerAbout}>
            <div className={style.containerAboutInfo}>
                <img src="https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png" alt="Foto de perfil" with="300px" height="300px"/>
                <h1>Luis Enrique Rodriguez Rizza</h1>
                <p>This project was initiated and developed by me during Module 2, in Henry's Bootcamp, all the knowledge learned in the lectures is brought together in this integrative project.</p>
            </div> 
        </div>
    )
}

export default About