import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ContactIndex from './components/contact/ContactIndex'
import ContactShow from './components/contact/ContactShow'
import ContactCreate from './components/contact/ContactCreate'


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ContactIndex} />
        <Route path="/contact/:id" component={ContactShow} />
        <Route path="/contact/new" component={ContactCreate} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
