const { getFav } = require("../src/controllers/handleFavorites")
const app = require("../src/app");
const session = require('supertest')
const agent = session(app)

const fav = getFav();

// describe("Test de RUTAS")
describe('GET /rickandmorty/character/:id',()=>{
    it('Responde con status: 200', async ()=>{
        await agent.get('/rickandmorty/character/1').expect(200)
    })
    it('Responde con un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
        const response = await agent.get("/rickandmorty/character/1")
        expect(response.body).toHaveProperty("id", "name", "species", "gender", "status", "origin","image")
    })
    it('Si hay un error responde con status: 500', async ()=>{
        await agent.get('/rickandmorty/character/11232').expect(500)
    })
})

describe("GET /rickandmorty/login", ()=>{
    // email: "luisrodrizza@gmail.com", password: "qwe123"
    it("Si existe el usuario y la contraseña regresa un access = true", async ()=>{
        
        const response = await agent.get("/rickandmorty/login/?email=luisrodrizza@gmail.com&password=qwe123")
        expect({access:true}).toEqual(response._body)

    })
    it("Si NO existe el usuario y la contraseña regresa un access = false", async ()=>{
        const response = await agent.get("/rickandmorty/login/?email=exapm@gmail.com&password=qwe1223")
        expect({access:false}).toEqual(response._body)

    })
})

describe("DELETE /rickandmorty/fav/:id",()=>{
    it("Si NO se encuentra el id, te regresa los personajes sin modificar", async ()=>{

        const response = await agent.delete("/rickandmorty/fav/2122")
        expect(fav).toEqual(response._body)
    })
    it("Si se encuentra el id, te elimina el personaje", async ()=>{
        const response = await agent.delete("/rickandmorty/fav/1")
        expect(fav).toEqual(response._body)
    })
})