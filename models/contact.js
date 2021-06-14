import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  image: { type: String },
})

export default mongoose.model('Contact', contactSchema)