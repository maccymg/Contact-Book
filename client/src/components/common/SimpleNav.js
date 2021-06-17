import React from 'react'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import useStyles from '../../styles'
import { Link } from 'react-router-dom'

function SimpleNav() {

  const classes = useStyles()


  return (
    <div className={classes.grow}>
      <AppBar className={classes.nav} position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>Contact Book</Typography>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
            <IconButton>
              <ExitToAppIcon/>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default SimpleNav