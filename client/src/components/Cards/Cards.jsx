import Card from './Card/Card';
import style from './Cards.module.css'

 
export default function Cards(props) {
   return (<div className={style.container}>
      {props.characters.map(pj =>{
         return <Card 
         key={pj.id}
         id={pj.id}
         name={pj.name} 
         origin={pj.origin?.name}
         status={pj.status}
         image={pj.image}
         species={pj.species} 
         gender={pj.gender} 
         onClose={props.onClose} 
         />
      })}
   </div>);
}
 