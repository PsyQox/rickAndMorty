const { Favorite } = require('../db');

const favDeleteController = async (id) => {
        const fav = await Favorite.findOne({where:{id:id}})
        if (fav) {
            await fav.destroy()
        }
        const favorites = await Favorite.findAll();
        return favorites
}

module.exports = favDeleteController