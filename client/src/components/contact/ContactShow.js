import React from 'react'
import { useHistory } from 'react-router-dom'
import { getSingleContact, deleteContact, editContact } from '../../lib/api'
import { useParams } from 'react-router-dom'
import SimpleNav from '../common/SimpleNav'
import { Typography, Container, Card, CardMedia, CardContent, CardActions, IconButton, Button, TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import useStyles from '../../styles'

function ContactShow() {
  const classes = useStyles()
  const history = useHistory()

  const [contact, setContact] = React.useState(null)
  const [isEditOpen, setIsEditOpen] = React.useState(false)

  const [editContactData, setEditContactData] = React.useState({
    firstName: '',
    secondName: '',
    email: '',
    phoneNumber: '',
    image: '',
  })

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

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await editContact(editContactData, id)
      console.log(data)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = event => {
    const value = event.target.value
    setEditContactData({ ...editContactData, [event.target.name]: value })
  }

  const handleDelete = async event => {
    event.preventDefault()
    try {
      const { data } = await deleteContact(id)
      console.log(data)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }
  

  const handleEdit = () => {
    setIsEditOpen(!isEditOpen)
  }



  return (
    <>
      <SimpleNav />
      <h1>Contact Show</h1>
      { contact ?
        <Container className={classes.cardContainer} maxWidth="md">
          <Card className={classes.card} raised>
            { contact.image === undefined ?
              <CardMedia
                className={classes.cardImage}
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
              :
              <CardMedia
                className={classes.cardImage}
                image={contact.image}
              />
            }
            <CardContent>
              { isEditOpen ?
                <form onSubmit={handleSubmit} className={classes.editForm}>
                  <div className={classes.editFormGroup}>
                    <TextField
                      placeholder={contact.firstName}
                      className={classes.editInput}
                      required
                      label="First Name"
                      value={editContactData.firstName}
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                      name="firstName"
                    />
                  </div>
                  <div className={classes.editFormGroup}>
                    <TextField
                      placeholder={contact.secondName}
                      className={classes.editInput}
                      required
                      label="Second Name"
                      value={editContactData.secondName}
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                      name="secondName"
                    />
                  </div>
                  <div className={classes.editFormGroup}>
                    <TextField
                      placeholder={contact.email}
                      className={classes.editInput}
                      required
                      label="Email"
                      value={editContactData.email}
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                  <div className={classes.editFormGroup}>
                    <TextField
                      placeholder={contact.phoneNumber}
                      className={classes.editInput}
                      required
                      label="Phone Number"
                      value={editContactData.phoneNumber}
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                      name="phoneNumber"
                    />
                  </div>
                  <div className={classes.editFormGroup}>
                    <TextField
                      placeholder={contact.image}
                      className={classes.editInput}
                      label="Image"
                      value={editContactData.image}
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                      name="image"
                    />
                  </div>
                  <div className={classes.editButtonContainer}>
                    <Button className={classes.editButton} 
                      variant="outlined"
                      onClick={handleEdit}
                    >
                    Back
                    </Button>
                    <Button className={classes.editButton} 
                      variant="outlined"
                      type="submit"
                    >
                    Submit
                    </Button>
                  </div>
                </form>
                :
                <div>
                  <Typography>{contact.firstName} {contact.secondName}</Typography>
                  <Typography>{contact.email}</Typography>
                  <Typography>{contact.phoneNumber}</Typography>
                  <CardActions>
                    <IconButton
                      onClick={handleEdit}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleDelete}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </div>
              }
            </CardContent>
            {/* <img src={contact.image}></img> */}
          </Card>
        </Container>
        :
        <div></div>
      } 
    </>
  )
}

export default ContactShow