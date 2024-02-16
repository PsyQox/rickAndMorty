const { User } = require('../db');

const loginAddController = async (email, password) => {

    const newUser = await User.findOrCreate({where: {email: email},defaults:{password:password}});    
    return newUser

}

module.exports = loginAddController