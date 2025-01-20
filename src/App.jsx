import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import List from './components/List'
import Form from './components/Form'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <Link to="/form">Form</Link>
      <Link to="/edit">Edit</Link>
      <Layout />
      <List />
    </div>
  )
}

export default App
