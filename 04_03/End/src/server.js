import express from 'express'
import db from './db'

const server = express()

server.get('/users/:username', async ( req, res ) => {
    const { username } = req.params
    try {
        const user = await db.getUserByUsername(username)
        res.json(user)
    }
    catch(err) {
        res.status(500).json(err)
    }
})

export { server }