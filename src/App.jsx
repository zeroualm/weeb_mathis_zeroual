import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css'
import Header from "./components/Nav/Header"
import Footer from "./components/Footer/Footer"

function App() {

  //const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        
        <main>
            <Outlet />
        </main>

        <Footer />
    </>
  )
}

export default App