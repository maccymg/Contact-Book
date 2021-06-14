import React from 'react'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/contacts')
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

  return <h1>Hello World</h1>
}

export default App