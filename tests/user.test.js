require('dotenv').config({ path: '.env.test' })

const request = require('supertest')
const app = require('../app')

const mongoose = require('mongoose')


// vai apagar a base de dados depois de cada teste
beforeEach(async () => {
    await mongoose.connection.dropDatabase()
})

afterAll(async () => {
    await mongoose.connection.close()
})


test('Deve criar conta de usuário', async () => {
    await request(app).post('/users/signup').send({
        userName: 'Caio',
        email: 'Caio@gmail.com',
        password: '123456'
    }).expect(201)
})

// test('Mostrar vaiavel de ambiente', () => {
//     expect(process.env.DB_URL).toBe('mongodb://127.0.0.1:27017/auth')
// })