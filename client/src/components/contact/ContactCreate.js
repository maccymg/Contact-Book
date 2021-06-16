import React from 'react'
import { useHistory } from 'react-router-dom'
import { createContact } from '../../lib/api'
import { TextField } from '@material-ui/core'
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

  const [errordata, setErrordata] = React.useState({
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
      setErrordata(err.response.data)
    }
  }

  const handleChange = event => {
    const value = event.target.value
    setContactData({ ...contactData, [event.target.name]: value })
    setErrordata('')
  }



  return (
    <div>
      <div className="form-content">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <TextField
              className={classes.input}
              required
              label="First Name"
              value={contactData.firstName}
              variant="outlined"
              onChange={handleChange}
              name="firstName"
            />
            {errordata.firstName ?
              <div className="error-message">{`*${errordata.firstName}`}</div>
              :
              <div className="error-message"></div>
            }
            {/* <label className="label">
              <input
                className="input"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={contactData.firstName}
              />
            </label> */}
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Second Name"
                onChange={handleChange}
                name="secondName"
                value={contactData.secondName}
              />
            </label>
            {errordata.secondName ?
              <div className="error-message">*{errordata.secondName}</div>
              :
              <div className="error-message"></div>
            }
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={contactData.email}
              />
            </label>
            {errordata.email ?
              <div className="error-message">*{errordata.email}</div>
              :
              <div className="error-message"></div>
            }
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="Phone Number"
                onChange={handleChange}
                name="phoneNumber"
                value={contactData.phoneNumber}
              />
            </label>
            {errordata.phoneNumber ?
              <div className="error-message">*{errordata.phoneNumber}</div>
              :
              <div className="error-message"></div>
            }
          </div>
          <div className="form-group">
            <label className="label">
              <input
                className="input"
                placeholder="image"
                onChange={handleChange}
                name="image"
                value={contactData.image}
              />
            </label>
            {errordata.image ?
              <div className="error-message">*{errordata.image}</div>
              :
              <div className="error-message"></div>
            }
          </div>
          <div className="form-footer">
            <button type="submit" className="button">Create Contract</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactCreate