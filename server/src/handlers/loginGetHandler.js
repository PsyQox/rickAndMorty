const loginGetController = require('../controllers/loginGetController')

const loginGetHandler = async (req, res) => {
    try {
        const { email, password } = req.query;
        const response = await loginGetController(email, password)   
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = loginGetHandler