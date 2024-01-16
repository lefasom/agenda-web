import React, { useState } from 'react'
import './layout.css'
import Slider from './slider/Slider'

function Layout() {

  const elements = [
    { "cat": 'Todo' },
    { "cat": 'Framework' },
    { "cat": 'Componentes' },
    { "cat": 'Porfolios' },
    { "cat": 'Fuentes' },
    { "cat": 'Iconos' },
    { "cat": 'Diseño' },
    { "cat": 'Hosting' },
    { "cat": 'Recursos' },
    { "cat": 'Backend' },
  ]

  return (
    <Slider elements={elements} />
  );
}

export default Layout;
