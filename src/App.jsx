import { useState } from 'react'
import Button from './components/Button'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="main-container">

        <div className="app-container">
          <h1>ScreenshotAPI</h1>
          <Form />
        </div>

        <p className='title'>Developer: Jack Lee Jabra</p>

      </div>


    </>
  )
}

export default App
