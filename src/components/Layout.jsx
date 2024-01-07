import React, { useState } from 'react';
import './layout.css';

function Layout() {
  const items = [
    'Todo',
    'Animaciones',
    'Componentes',
    'Framework',
    'Diseño',
    'Porfolios',
  ];
  const [category, setCategory] = useState('Framework');

  let itemsToShow = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsToShow);


  const next = () => {

    if (endIndex < items.length) {
      setStartIndex((startIndex + itemsToShow));
      setEndIndex((endIndex + itemsToShow));
    } else {
      setStartIndex((0));
      setEndIndex((itemsToShow));
    }

  };

  const prev = () => {
    if (startIndex <= 0) {
      setStartIndex((items.length - itemsToShow));
      setEndIndex((items.length));
    } else {
      setStartIndex((startIndex - itemsToShow));
      setEndIndex((endIndex - itemsToShow));
    }
  };

  return (
    <nav className="slider">
      <button onClick={prev}>
        <span class="material-symbols-outlined">
          chevron_left
        </span>
      </button>
      <ul className="slider-list">
        {items.slice(startIndex, endIndex).map((item, index) => {

          if (category == item) {
            return (
              <li style={{ background: "#bbb", color: "#fff" }} key={index}>{item}</li>
            )
          } else {
            return (
              <li key={index}>{item}</li>
            )
          }
        }

        )}
      </ul>
      <button onClick={next}>
        <span class="material-symbols-outlined">
          chevron_right
        </span>
      </button>
    </nav>
  );
}

export default Layout;
