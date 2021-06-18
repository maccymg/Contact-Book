import React from 'react'
import { getSingleContact } from '../../lib/api'
import { useParams } from 'react-router-dom'
import SimpleNav from '../common/SimpleNav'
import { Typography } from '@material-ui/core'

function ContactShow() {

  const [contact, setContact] = React.useState(null)

  const { id } = useParams()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleContact(id)
        setContact(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  return (
    <>
      <SimpleNav />
      <h1>Contact Show</h1>
      { contact ?
        <div>
          <Typography>{contact.firstName} {contact.secondName}</Typography>
          <Typography>{contact.email}</Typography>
          <Typography>{contact.phoneNumber}</Typography>
          <img src={contact.image}></img>
        </div>
        :
        <div></div>
      } 
    </>
  )
}

export default ContactShow