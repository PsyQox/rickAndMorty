const favAddController = require('../controllers/favAddController')


const favPostHandler = async (req, res) => {
    
    const {id,name,origin,status,image,species,gender} = req.body
    if(!id||!name || !origin || !status || !image || !species || !gender) return res.status(401).json({error: "Missing data"})
    
    try {
        const response = await favAddController({id,name,origin,status,image,species,gender})
        res.status(201).json(response)
    } catch (error) {
        return res.status(500).json(error.message)
    }
    
}

module.exports = favPostHandler