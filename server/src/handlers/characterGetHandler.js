const characterGetController = require('../controllers/characterGetController')

const characterGetHandler = async (req, res) => {
    try {
        const { id } = req.params
        const response = await characterGetController(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    
}

module.exports = characterGetHandler