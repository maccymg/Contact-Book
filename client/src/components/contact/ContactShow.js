import React from 'react'
import { useHistory } from 'react-router-dom'
import { getSingleContact, deleteContact } from '../../lib/api'
import { useParams } from 'react-router-dom'
import SimpleNav from '../common/SimpleNav'
import { Typography, Container, Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import useStyles from '../../styles'

function ContactShow() {
  const classes = useStyles()
  const history = useHistory()

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

  return (
    <>
      <SimpleNav />
      <h1>Contact Show</h1>
      { contact ?
        <Container className={classes.cardContainer} maxWidth="md">
          <Card className={classes.card} raised>
            <CardMedia
              className={classes.cardImage}
              image={contact.image}
            />
            <CardContent>
              <Typography>{contact.firstName} {contact.secondName}</Typography>
              <Typography>{contact.email}</Typography>
              <Typography>{contact.phoneNumber}</Typography>
              <CardActions>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={handleDelete}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
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