import React from 'react'
import { Typography, AppBar, InputBase, Toolbar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import useStyles from '../../styles'


function Nav() {

  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <AppBar position="relative">
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
            />
          </div>
          <IconButton aria-label="add">
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav