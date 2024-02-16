import React from "react";
import style from './About.module.css'

const About = () =>{
    return(
        <div className={style.containerAbout}>
            <div className={style.containerAboutInfo}>
                <img src="https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png" alt="Foto de perfil" with="300px" height="300px"/>
                <h1>Luis Enrique Rodriguez Rizza</h1>
                <p>Este proyecto, fue inciado y dearrollado por mi en el transcurso del Módulo 2, en el Bootcamp de Henry, se juntan todos los conocimientos aprendidos en las lecture en este proyecto integrador.</p>
            </div> 
        </div>
    )
}

export default About