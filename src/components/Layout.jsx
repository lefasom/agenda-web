import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentCategory } from '../../redux/categorySlice'
import './layout.css'

function Layout() {
  const dispatch = useDispatch()
  let category = useSelector((state) => state.category)

  const items = [
    'Todo',
    'Framework',
    'Componentes',
    'Porfolios',
    'Fuentes',
    'Iconos',
    'Diseño',
    'Hosting',
    'Recursos',
  ]

  let itemsToShow = 3
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(itemsToShow)

  const filterCategory = (item) => {
    dispatch(currentCategory(item))
  }

  const next = () => {

    if (endIndex < items.length) {
      setStartIndex((startIndex + itemsToShow))
      setEndIndex((endIndex + itemsToShow))
    } else {
      setStartIndex((0))
      setEndIndex((itemsToShow))
    }

  };

  const prev = () => {
    if (startIndex <= 0) {
      setStartIndex((items.length - itemsToShow))
      setEndIndex((items.length))
    } else {
      setStartIndex((startIndex - itemsToShow))
      setEndIndex((endIndex - itemsToShow))
    }
  };

  return (
    <nav className="slider">
      <button onClick={prev}>
        <span className="material-symbols-outlined">
          chevron_left
        </span>
      </button>
      <ul className="slider-list">
        {items.slice(startIndex, endIndex).map((item, index) => {

          if (category.category == item) {
            return (
              <li onClick={() => { filterCategory(item) }} style={{ background: "#bbb", color: "#fff" }} key={index}>{item}</li>
            )
          } else {
            return (
              <li onClick={() => { filterCategory(item) }} key={index}>{item}</li>
            )
          }
        }

        )}
      </ul>
      <button onClick={next}>
        <span className="material-symbols-outlined">
          chevron_right
        </span>
      </button>
    </nav>
  );
}

export default Layout;
