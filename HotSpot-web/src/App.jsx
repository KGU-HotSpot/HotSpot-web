import { useState } from 'react'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
    </>
  )
}

export default App
