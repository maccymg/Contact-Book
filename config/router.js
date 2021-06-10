import express from 'express'
import contacts from '../controllers/contacts.js'

const router = express.Router()

router.route('/contacts')
  .get(contacts.index)
  .post(contacts.create)

router.route('/contacts/:id')
  .get(contacts.show)
  .put(contacts.update)
  .delete(contacts.delete)

export default router