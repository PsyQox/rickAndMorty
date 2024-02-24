import React from "react";
import style from "./Landing.module.css"
import { Link } from "react-router-dom"; 

const Landing  = () =>{

    return (
        <div className={style.container}>
            <div className={style.containerButton}>
                <Link to="/home">
                    <button className={style.button}>Get into</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing