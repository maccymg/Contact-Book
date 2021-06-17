import { fade, makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({

  nav: {
    backgroundColor: '#00C301',
    alignItems: 'center',
  },

  navDiv: {
    height: '50px',
  },

  grow: {
    flexGrow: 1,
    width: '80%',
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

  container: {
    marginTop: '20px',
  },

  contactContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  contact: {
    paddingTop: '14px',
    paddingBottom: '14px',
    borderBottom: '1px solid #d9d9d9',
  },

  secondName: {
    fontWeight: 'bold',
  },

  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '100px',
    marginBottom: '80px',
  },

  createContainer: {
    width: '100%',
  },

  input: {
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%',
  },

  formGroup: {
    width: '250px',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
  },

  form: {
    border: '2px solid #00C301',
    padding: '40px 60px 20px 60px',
    borderRadius: '5px',
  },


  button: {
    color: '#00C301',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: '20px',
  },


}))

export default useStyles