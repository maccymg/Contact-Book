import express from 'express'
import { port } from './config/environment.js'
import connectToDatabase from './lib/connectToDb.js'
import logger from './lib/logger.js'
import router from './config/router.js'

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

app.use(express.json())

app.use(logger)

app.use(router)

app.use((req, _res, next) => {
  console.log(`🚨 Incoming Request: ${req.method} - ${req.url}`)
  next()
})
