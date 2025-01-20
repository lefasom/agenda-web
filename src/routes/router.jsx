import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Edit from '../pages/Edit';
import Form from '../pages/Form';
import App from '../App';

function router() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/form" element={<Form />} />
          {/* Puedes añadir más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  )
}

export default router