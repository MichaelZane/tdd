import sinon from 'sinon'
import request from 'supertest'
import { expect } from 'chai'
import db from './db'
import { server } from './server'

describe('GET /users/:username', () => {
    it('sends the correct response when a user with the username is found', async () => {
        //test doubles
        const fakeData = {
            id: '00',
            username: 'abc',
            email: 'test@gmail.com',
        }

        const stub = sinon
            .stub(db, 'getUserByUsername')
            .resolves(fakeData)

        await request(server).get('/users/abc')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(fakeData)
        expect(stub.getCall(0).args[0]).to.equal('abc')

        stub.restore()


    })

    it('send the correct response when there is an error', async () => {
        const fakeError = { message: 'Something went wrong!'}

        const stub = sinon.stub(db, 'getUserByUsername')
            .throws(fakeError)

        await request(server).get('/users/abc')
            .expect(500)
            .expect('Content-Type', /json/)
            .expect(fakeError)
        stub.restore()
    })
})
