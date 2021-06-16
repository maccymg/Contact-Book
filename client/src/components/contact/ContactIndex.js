import React from 'react'
import { getAllContacts } from '../../lib/api'
import { Link } from 'react-router-dom'
import { Grid, Typography, AppBar, InputBase, Toolbar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import useStyles from '../../styles'


function ContactIndex() {

  const classes = useStyles()

  const [formdata, setFormdata] = React.useState('')

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


  const filteredContacts = contacts ? contacts.filter(contact => (
    contact.secondName.toLowerCase().includes(formdata.toLowerCase()) || contact.firstName.toLowerCase().includes(formdata.toLowerCase()) || contact.email.toLowerCase().includes(formdata.toLowerCase()) || contact.phoneNumber.includes(formdata)
  )) : null

  const sortedContacts = filteredContacts ? filteredContacts.sort((lastOne, nextOne) => {
    const alast = lastOne.secondName
    const blast = nextOne.secondName
    return alast > blast ? 1 : -1
  }) : null

  

  const handleInput = event => {
    const value = event.target.value
    setFormdata(value)
  }


  return (
    <>
      <div className={classes.grow}>
        <AppBar className={classes.nav} position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>Contact Book</Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                name="search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={handleInput}
              />
            </div>
            <Link to={'/contact/new'} style={{ textDecoration: 'none', color: 'black' }}>
              <IconButton>
                <AddIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.navDiv}></div>
      <div className={classes.gridContainer}>
        {contacts && sortedContacts.map(contact => (
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