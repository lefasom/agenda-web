import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import List from './components/List'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Layout />
      <List />
      <Link id='Link' to="/form">
        <span id='add' className="material-symbols-outlined">
          add
        </span>
      </Link>

    </>
  )
}

export default App
