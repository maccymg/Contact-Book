import { fade, makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({

  nav: {
    backgroundColor: '#00C301',
  },

  navDiv: {
    height: '50px',
  },

  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

  gridContainer: {
    marginTop: '20px',
  },

  grid: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: '30px',
    borderBottom: '1px solid #d9d9d9',
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      width: '95%',
    },
  },

  contact: {
    paddingTop: '12px',
    paddingBottom: '12px',
  },

  secondName: {
    fontWeight: 'bold',
  },

}))

export default useStyles