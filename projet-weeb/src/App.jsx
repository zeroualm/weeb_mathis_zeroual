import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css'
import Header from "./components/Nav/Header"

function App() {

  //const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default App