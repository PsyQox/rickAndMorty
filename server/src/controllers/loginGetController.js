const { User } = require('../db');

const login = async (email, password)=>{
    
    if (!email || !password) throw new Error("Missing data")

        const user = await User.findOne({where:{email:email, password: password}})
        console.log(JSON.stringify(user));
        if (!user) throw new Error("Usuario no encontrado")

        if (user.email === email || user.password === password) {
            return { access: true }   
        }else{
            return { access: false }
        }
    
}

module.exports = login