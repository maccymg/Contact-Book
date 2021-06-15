import React from 'react'
import { getAllContacts } from '../../lib/api'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'

import Nav from '../common/Nav'

function ContactIndex() {

  const classes = useStyles()

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



  return (
    <>
      <Nav />
      <div className={classes.gridContainer}>
        {contacts && contacts.map(contact => (
          <div key={contact._id}>
            <Link to={`/contacts/${contact._id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <Grid className={classes.grid}
                container
              >
                <div>
                  <Typography className={classes.contact} variant="h6">{contact.firstName} <span className={classes.secondName}>{contact.secondName}</span></Typography>
                </div>
              </Grid>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default ContactIndex