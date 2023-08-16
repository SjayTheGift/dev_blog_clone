import { useState } from "react";
import Navbar from "./components/Navbar"
import Body from "./components/Body"

function App() {
  const [nav, setNav] = useState(false);
  return (
    <>
    
      <Navbar nav={nav} setNav={setNav} />
      <Body nav={nav} setNav={setNav} />
      {nav ? <div onClick={() => setNav(!nav)} className='fixed top-0 z-[10] w-full min-h-screen bg-gray-800 opacity-75 '></div>: ''}
    
    
    </>
  )
}

export default App
