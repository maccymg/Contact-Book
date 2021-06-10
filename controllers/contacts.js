import Contact from '../models/contact.js'
import { notFound } from '../lib/errorHandler.js'

async function contactIndex(_req, res, next){
  try {
    const contacts = await Contact.find()
    return res.status(200).json(contacts)
  } catch (err) {
    next(err)
  }
}

async function contactCreate (req, res, next) {
  try {
    const newContact = await Contact.create(req.body)
    return res.status(201).json(newContact)
  } catch (err) {
    next(err)
  }
}

async function contactShow(req, res, next) {
  const { id } = req.params
  try {
    const contact = await Contact.findById(id)
    if (!contact) throw new Error(notFound)
    return res.status(200).json(contact)
  } catch (err) {
    next(err)
  }
}

async function contactUpdate(req, res, next){
  const { id } = req.params
  try {
    const contactToEdit = await Contact.findById(id)
    if (!contactToEdit) throw new Error(notFound)
    Object.assign(contactToEdit, req.body)
    await contactToEdit.save()
    return res.status(202).json(contactToEdit)
  } catch (err) {
    next(err)
  }
}

async function contactDelete(req, res, next) {
  const { id } = req.params
  try {
    const contactToDelete = await Contact.findById(id)
    if (!contactToDelete) throw new Error(notFound)
    await contactToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

export default {
  index: contactIndex,
  create: contactCreate,
  show: contactShow,
  update: contactUpdate,
  delete: contactDelete,
}
