const { Favorite } = require('../db')

const favAddController = async (character) => {
    const {id,name,origin,status,image,species,gender} = character

    await Favorite.findOrCreate({where: {id:id},defaults:{
        name:name,
        origin:origin,
        status:status,
        image:image,
        species:species,
        gender:gender
    }})

    const favorites = await Favorite.findAll();
    return favorites
}

module.exports = favAddController