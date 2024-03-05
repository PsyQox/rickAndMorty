import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from './Detail.module.css'


const Detail = ()=>{
    const {id} = useParams();
    const [character, setCharacters] = useState({});

    useEffect(()=>{
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(res=>res.json())
         .then((data) => setCharacters(data) )
    },[])

    return(
        <div className={style.container}>
            <div className={style.containerDetail}>
                <div className={style.containerDetailInfo}>
                    <h2>Name: {character.name}</h2>
                    <h2>Status: {character.status}</h2>
                    <h2>Specie: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Origin: {character.origin?.name}</h2>
                    <img src={character.image} alt={character.name} width="300px" height="300px"/>
                </div>
            </div>
        </div>
    )
}

export default Detail