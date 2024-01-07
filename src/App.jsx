import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import List from './components/List'
import Form from './components/Form'

function App() {

  return (
    <div>
      <Form />
      <Layout/>
      <List />
    </div>
  )
}

export default App
