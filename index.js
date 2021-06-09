import express from 'express'
import Contact from './models/contact.js'
import { port } from './config/environment.js'
import connectToDatabase from './lib/connectToDb.js'

const app = express()

async function startServer() {
  try {
    await connectToDatabase()
    console.log('Database has connected')
    app.listen(port, () => console.log(`Up and running on port ${port}`))
  } catch (err) {
    console.log('Something went wrong starting the 	app')
    console.log(err)
  }
}

startServer()

