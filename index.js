import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 4000
const dbURI = 'mongodb://localhost/contact-book-db'

async function startServer() {
  try {
    await mongoose.connect(dbURI, { useNewUrlPaser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('Database has connected')
    app.listen(port, () => console.log(`Up and running on port ${port}`))
  } catch (err) {
    console.log('Something went wrong starting the 	app')
    console.log(err)
  }
}

startServer()
