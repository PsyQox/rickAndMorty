const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/'



const characterGetController = async ( id ) =>{
    
    if(!id) throw new Error("Missing data")

    const { data } = await axios.get(`${URL}${id}`) 
    
    const objChar={
        id: Number(data.id),
        name:data.name,
        gender:data.gender,
        species:data.species,
        origin:data.origin,
        image:data.image,
        status:data.status
    }
    
    return objChar
}


module.exports = characterGetController