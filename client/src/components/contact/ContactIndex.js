import React from 'react'
import { getAllContacts } from '../../lib/api'

import Nav from '../common/Nav'

function ContactIndex() {

  const [contacts, setContacts] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllContacts()
        setContacts(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log(contacts)

  return (
    <>
      <Nav />
      <h1>Contact Index</h1>
    </>
  )
}

export default ContactIndex