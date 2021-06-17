import React from 'react'
import SimpleNav from '../common/SimpleNav'
import { useHistory } from 'react-router-dom'
import { createContact } from '../../lib/api'
import { TextField, Container, Button } from '@material-ui/core'
import useStyles from '../../styles'

function ContactCreate() {
  const classes = useStyles()
  const history = useHistory()



  const [contactData, setContactData] = React.useState({
    firstName: '',
    secondName: '',
    email: '',
    phoneNumber: '',
    image: '',
  })


  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await createContact(contactData)
      console.log(data)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = event => {
    const value = event.target.value
    setContactData({ ...contactData, [event.target.name]: value })
  }



  return (
    <div className={classes.createContainer}>
      <SimpleNav />
      <Container className={classes.formContainer}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.formGroup}>
            <TextField
              className={classes.input}
              required
              label="First Name"
              value={contactData.firstName}
              variant="outlined"
              onChange={handleChange}
              name="firstName"
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              className={classes.input}
              required
              label="Second Name"
              value={contactData.secondName}
              variant="outlined"
              onChange={handleChange}
              name="secondName"
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              className={classes.input}
              required
              label="Email"
              value={contactData.email}
              variant="outlined"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              className={classes.input}
              required
              label="Phone Number"
              value={contactData.phoneNumber}
              variant="outlined"
              onChange={handleChange}
              name="phoneNumber"
            />
          </div>
          <div className={classes.formGroup}>
            <TextField
              className={classes.input}
              label="Image"
              value={contactData.image}
              variant="outlined"
              onChange={handleChange}
              name="image"
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button className={classes.button} 
              variant="outlined"
              type="submit"
            >
            Submit
            </Button>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default ContactCreate