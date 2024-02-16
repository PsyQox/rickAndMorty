const favDeleteController = require('../controllers/favDeleteController')

const favDeleteHandler = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(401).json({error: "Missing data"})
    try{
        const response = await favDeleteController(id)
        res.status(200).json(response)
    }catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = favDeleteHandler