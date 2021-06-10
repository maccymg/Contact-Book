import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  image: { type: String },
})

export default mongoose.model('Contact', contactSchema)