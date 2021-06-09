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

app.use(express.json())

app.use((req, _res, next) => {
  console.log(`🚨 Incoming Request: ${req.method} - ${req.url}`)
  next()
})

app.get('/contacts', async (req, res) => {
  const contacts = await Contact.find()
  return res.status(200).json(contacts)
})

app.post('/contacts', async (req, res) => {
  try {
    const newContact = await Contact.create(req.body)
    return res.status(201).json(newContact)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
})

app.get('/contacts/:id', async (req, res) => {
  const { id } = req.params
  try {
    const contact = await Contact.findById(id)
    if (!contact) throw new Error()
    return res.status(200).json(contact)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
})
