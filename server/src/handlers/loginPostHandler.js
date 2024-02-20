const loginAddController = require('../controllers/loginAddController')

const loginPostHandler = async (req, res) => {
    const { email, password } = req.body
    console.log("hola");
    if (!email.trim() || !password.trim())  res.status(401).json({error: "Missing data"})
    try {
        const response = await loginAddController(email, password)
        if (response[1] === false){ 
            res.status(404).json({error: "This user already exists."})
            
        }else{
            res.status(201).json(response)
        }
    } catch (error) {
        res.status(500).json({ error:error.message })
    }

}

module.exports = loginPostHandler