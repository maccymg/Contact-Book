import axios from 'axios'

const baseUrl = '/api'

export function getAllContacts() {
  return axios.get(`${baseUrl}/contacts`)
}

export function getSingleContact(id) {
  return axios.get(`${baseUrl}/contacts/${id}`)
}

export function createContact(contactData) {
  return axios.post(`${baseUrl}/contacts`, contactData)
}

export function deleteContact(id) {
  return axios.delete(`${baseUrl}/contacts/${id}`)
}

export function editContact(editContactData, id) {
  return axios.put(`${baseUrl}/contacts/${id}`, editContactData)
}
