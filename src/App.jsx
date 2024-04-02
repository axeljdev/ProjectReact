import { useState } from 'react'
import './App.css'

function App() {
  const [pizza, setPizza] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setPizza((pizza) => pizza + 1)}>
          Pizza 🍕 {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
