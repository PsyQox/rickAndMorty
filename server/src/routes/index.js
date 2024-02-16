const characterGetHandler = require('../handlers/characterGetHandler')
const loginGetHandler = require('../handlers/loginGetHandler')
const loginPostHandler = require('../handlers/loginPostHandler')
const favPostHandler = require('../handlers/favPostHandler')
const favDeleteHandler = require('../handlers/favDeleteHandler')
const express = require('express')

const routes = express.Router()

routes.get("/character/:id", characterGetHandler)
routes.get("/login", loginGetHandler)
routes.post("/login", loginPostHandler)
routes.post("/fav", favPostHandler)
routes.delete("/fav/:id", favDeleteHandler)


module.exports = routes