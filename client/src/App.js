import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ContactIndex from './components/contact/ContactIndex'
import ContactShow from './components/contact/ContactShow'
import ContactCreate from './components/contact/ContactCreate'


function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/contacts')
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

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
