
import React,{useState} from "react";
import Card from "../Cards/Card/Card";
import { connect, useDispatch } from "react-redux";
import style from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions";


const Favorites = (props)=>{
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        if (aux) {
            setAux(false);
        }else{
            setAux(true);
        }
    }

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div >
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            
            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            <div className={style.container}>
                {props.myFavorites?.map(pj=>{
                    return <Card id={pj.id} name={pj.name} image={pj.image} onClose={pj.onClose}/>
                })}    
            </div>
            
        </div>
    )
}

// class Favorites extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return(
//             <div className={style.container}>
//                 <select >
//                     <option value="A">Ascendente</option>
//                     <option value="D">Descendente</option>
//                 </select>

//                 <select>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Genderless">Genderless</option>
//                     <option value="unknown">unknown</option>
//                 </select>
//                 {this.props.myFavorites?.map(pj=>{
//                     return <Card id={pj.id} name={pj.name} image={pj.image} onClose={pj.onClose}/>
//                 })}
//             </div>
//         )
//     }
// }

const mapStateToProps = (state)=>{
    return{
        myFavorites: state.myFavorites,
        allCharacters: state.allCharacters
    }
}

export default connect(mapStateToProps,null)(Favorites)
// export default Favorites

