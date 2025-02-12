require('dotenv').config({ path: '.env.test' })

const request = require('supertest')
const app = require('../app')

const mongoose = require('mongoose')
const User = require('../src/model/userModel')

const user = {
    userName: 'Andre',
    email: 'andre@gmail.com',
    password: '123456'
}

// vai apagar a base de dados depois de cada test
beforeEach(async () => {
    await User.deleteMany()
    await new User(user).save()
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

test('Deve criar conta de usuário', async () => {
    await request(app).post('/users/login').send({
        email: 'andre@gmail.com',
        password: '123456'
    }).expect(200)
})

