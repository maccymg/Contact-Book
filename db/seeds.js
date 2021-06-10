import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import Contact from '../models/contact.js'
import contactData from './data/contacts.js'

async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    const contacts = await Contact.create(contactData)

    console.log(`🤖 ${contacts.length} contacts created`)

    await mongoose.connection.close()
    console.log('🤖 Goodbye')

  } catch (err) {
    console.log('🤖 Something went wrong')
    console.log(err)

    await mongoose.connection.close()
    console.log('🤖 Goodbye')
  }
}

seedDatabase()