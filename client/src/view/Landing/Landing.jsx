import React from "react";
import Form from "../../components/Form/Form";
import style from "./Landing.module.css"

const Landing  = ({login}) =>{

    return (
        <div className={style.container}>
            <Form login={login}/>
        </div>
    )
}

export default Landing