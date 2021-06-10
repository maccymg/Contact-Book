import Contact from '../models/contact.js'

async function contactIndex(_req, res){
  try {
    const contacts = await Contact.find()
    return res.status(200).json(contacts)
  } catch (err) {
    console.log(err)
  }
}

async function contactCreate (req, res) {
  try {
    const newContact = await Contact.create(req.body)
    return res.status(201).json(newContact)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

async function contactShow(req, res) {
  const { id } = req.params
  try {
    const contact = await Contact.findById(id)
    if (!contact) throw new Error()
    return res.status(200).json(contact)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

async function contactUpdate(req, res){
  const { id } = req.params
  try {
    const contactToEdit = await Contact.findById(id)
    if (!contactToEdit) throw new Error()
    Object.assign(contactToEdit, req.body)
    await contactToEdit.save()
    return res.status(202).json(contactToEdit)
  } catch (err) {
    console.log(err)
  }
}

async function contactDelete(req, res) {
  const { id } = req.params
  try {
    const contactToDelete = await Contact.findById(id)
    if (!contactToDelete) throw new Error()
    await contactToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
}

export default {
  index: contactIndex,
  create: contactCreate,
  show: contactShow,
  update: contactUpdate,
  delete: contactDelete,
}
