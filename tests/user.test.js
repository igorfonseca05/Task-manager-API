require('dotenv').config({ path: '.env.test' })

const request = require('supertest')
const app = require('../app')


test('Deve criar conta de usuário', async () => {
    await request(app).post('/signup').send({
        userName: 'Caio',
        email: 'Caio@gmail.com',
        password: '123456'
    }).expect(201)
})