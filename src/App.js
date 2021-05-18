import { useState, useEffect } from 'react';
import './App.css';

const COOL_NAMES = [
  'james', 'khouloud'
]

function App() {

  const [name, setName] = useState('')
  const [isCool, setIscool] =useState(false)
  useEffect(()=>{setIscool(COOL_NAMES.includes(name.toLocaleLowerCase()))}, [name])
  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <h1>Who is Cool?</h1>
      <input value={name} onChange= {handleChange}/>
      {name && <p>{name} is {!isCool && 'not'} cool </p>}
    </div>
  );
}

export default App;