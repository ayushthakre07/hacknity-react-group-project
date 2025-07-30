import React from 'react'
import Button from '../components/Button'
import About from '../views/About'
import Dashboard from '../views/Dashboard'
import Navbar from '../components/Navbar'
function Home() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
    <h1>Home Page</h1>

    </div>
  )
}
export default Home