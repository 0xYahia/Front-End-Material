import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    console.log('use effect on time');
  }, [])

  console.log('render');
  return (
    <div className='App'>
      <label>Name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Phone</label>
      <input
        type='text'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
    </div>
  )
}

export default App
