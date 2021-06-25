# Contact Book

MERN stack App

In this project, I was tasked with creating a program that can be used to manage contacts.

- It has to work as an HTTP REST API
- You have to be able to add a contact with a name, email, and phone number
- You have to be able to list all your contacts
- You have to be able to edit a contact
- You have to be able to delete a contact
- The contacts must persist


![Picture](tablet-size.png)


URL - not launched

### Dependencies:

Yarn add:

- express
- mongoose

In the client folder, yarn add:

- material-ui/core
- material-ui/icons
- axios
- react-router-dom

### Instructions on running:

Add in package.json inside scripts:

"dev": "npx nodemon",
"seed": "node db/seeds.js",
"dev-fullstack": "concurrently \"yarn dev\" \"cd client && yarn start\""


yarn dev – run the backend
yarn seed – run the database seeding, have to kill the server to run this commad
yarn dev-fullstack – run the backend and frontend together


## General approach taken:

Having used Django for my previous project I felt it would be good practice to revisit the MERN stack app.

### Connecting to the database and building the basic model

Having created the repository on GitHub and linked it locally I began building the backend. Having create a simple component connecting to the database I began moving out the environment and the connect to database function to reduce clutter in index.js. Having done this, I set about building the model. This is something that I made slight changes to throughout the process as it became clearer what I wanted. Initially I just had a key of name which I made unique but as the app developed I realised having a first name and second name key was better. Having done this in the main repository I created and moved into the development directory as even though I was the only one working on the project I thought it would be good industry practice not to work in the main directory.

```JavaScript
// Contact model 

import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  image: { type: String },
})

export default mongoose.model('Contact', contactSchema)    
```

### Back-end decision

Having created the contact model, I began thinking of how far I was going to push the backend. If I was going to have users I would have to embed the contact model in a user model. Having done embedded relationships with users and comments in my project 3 at GA I decided to build the app for just one user so without these. This decision was down to the fact that I would learn more trying out a new framework on the frontend rather than follow content I had done previously and it would give me more time to implement extra features on the frontend.


### Controllers and seeding

I then set about creating my get and post controllers and finally the put and delete testing them regularly using Insomnia to check everything was working as expected. I then moved out the logger and used one that had been given to us on the course that makes it really clear in the console the requests you are making and the information attached to the these. I then set about building the seeding for my app. Having created this I realised a problem with my data as the phone number key which I had made a type of number was causing the numbers to be wrong as the 0 at the begging of the numbers was being cut off. To solve this, I changed its type to a string and ran the database seeding again. At this point my index,js began to get cluttered again so I moved the controllers out to a separate file and also created a router to send the controllers through. 

### Error Handling

I then began creating an error handler to updating the controllers to use this when an error occurred. Having used this error handler before I was surprised that when I was trying to deal with form errors later when creating the frontend that it wasn’t working as I had hoped. While keys that I had made unique where preventing the user from creating a new contact it was throwing an error status 500 rather than a 422 validation error as I had hoped and therefore I was not able to access the errors object to feed that information back to the user. This is something that I will have to have a deeper look at to see what I could have done differently.


![Picture](p-w-duo-sizing.png)

### Adding the front-end

Having used the create react app with GA template I amended the get data function and was able to see my contacts showing in the console. Having done this I began to plan the pages that I needed. Having used react-router-dom previously to deal with multi page applications I added this dependency and started building out the most simple react components and importing these back into App.js creating the necessary Route paths. 

```JavaScript
// Mapping the contacs data

{contacts && sortedContacts.map(contact => (
          <div key={contact._id}>
            <Link to={`/contacts/${contact._id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <Container className={classes.contactContainer}>
                <div>
                  <Typography className={classes.contact} variant="h6">{contact.firstName} <span className={classes.secondName}>{contact.secondName}</span></Typography>
                </div>
              </Container>
            </Link>
          </div>
        ))}
```

### Material UI

At this point having used CSS styling for my pervious projects and having coded the backend in a way I was used to, I thought I would try something completely new and learn Material UI. This was a great experience as while aspects of it were relatively similar to stuff I had done before, using the styles hook and styles.js file and writing CSS in JavaScript camel case was very strange to me. Having spent a few days reading through the docs and practicing syntax I began with the navbar component. Having taken a component from the docs I began adjusting it to my needs and looking at how they had used the styles as certain things such as how they dealt with responsive design. This was very beneficial to see how they had implemented certain things and I was able to use this to improve my skills.


### API requests

Using axios I was able to create my request functions in the frontend and exported these so they could be used in the various pages. I then moved out and updated my get all contacts function and began creating my index.js page. Throughout the process of creating the frontend I tended to split the time between writing the logic for the different pages and doing the JSX and styling elements as this enabled me to break up the hard coding and work more effectively. Having got all the contacts showing in the console I set about playing around with Material UI in both the index and nav pages. 

```JavaScript
// API Requests

const baseUrl = '/api'

export function getAllContacts() {
  return axios.get(`${baseUrl}/contacts`)
}

export function getSingleContact(id) {
  return axios.get(`${baseUrl}/contacts/${id}`)
}

export function createContact(contactData) {
  return axios.post(`${baseUrl}/contacts`, contactData)
}

export function deleteContact(id) {
  return axios.delete(`${baseUrl}/contacts/${id}`)
}

export function editContact(editContactData, id) {
  return axios.put(`${baseUrl}/contacts/${id}`, editContactData)
}
```

### Search bar and sorting

I then set about creating the search bar in the nav. This created a problem as the information needed including for the search bar including the formdata and filtered contacts was inside the index.js and the input was currently in a separate component. Instead of trying to pass state and the contact info down to the nav, I thought it would be easier to move the nav inside index js and create a simpler nav for the other pages that didn’t need the search bar. Having completed this, I set about creating the logic behind sorting the contacts in alphabetical order as with a search bar I deemed this a necessary aspect of a contact book.

```JavaScript
// Filtering and sorting

const filteredContacts = contacts ? contacts.filter(contact => (
    contact.secondName.toLowerCase().includes(formdata.toLowerCase()) || contact.firstName.toLowerCase().includes(formdata.toLowerCase()) || contact.email.toLowerCase().includes(formdata.toLowerCase()) || contact.phoneNumber.includes(formdata)
  )) : null

  const sortedContacts = filteredContacts ? filteredContacts.sort((lastOne, nextOne) => {
    const alast = lastOne.secondName.toLowerCase()
    const blast = nextOne.secondName.toLowerCase()
    return alast > blast ? 1 : -1
  }) : null
```

### Contact create

This was a challenging page as I was dealing with Material UI forms and the logic behind the create request. This posed challenging problems with the error handling not working as I would have hoped and so had to use Material UI props to give some information back to the user but still this wasn’t as complete as I would have hoped.

### Contact Show 

Having set up the basic logic for the contact show page I began adding the edit and delete actions. While the delete was relatively simple the edit caused a few problems. Having found a default value prop on the Text Field component I thought I would be able to use this to capture the old data so it was there and then the value prop to set new state when typing the new information. This however caused an error as the props didn’t work together and so annoyingly I had to settle for using the placeholder to display the old data. Finally, I added a basic image for contacts that didn’t have an image as I didn’t make the image required in the contacts model.



### Future Features

Future features involve restructuring the backend to have users with embedded contact models. In terms of the front end adding an alphabetical slider on the side. Fixing error handling as to give the user the full information about why there create contact request might not be working. Similarly, editing the data without clearing the input boxes.

### Key Learning

Key learning included Material UI, manipualting arrays and filtering data.
