import { useEffect, useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import "./image-slider.css"
import { useDispatch, useSelector } from "react-redux"
import { currentCategory } from "../../../redux/categorySlice"
type CatSliderProps = {
  elements: {
    cat: string
  }[]
}

export function ImageSlider({ elements }: CatSliderProps) {

  const dispatch = useDispatch()
  let category = useSelector((state) => state.category)

  const [elementIndex, setElementIndex] = useState(0)
  function showNextElement() {
    setElementIndex(index => {
      if (index === elements.length - 3) return 0
      return index + 1
    })
  }

  function showPrevElement() {
    setElementIndex(index => {
      if (index === 0) return elements.length - 1
      return index - 1
    })
  }
  function showNextElementMob() {
    setElementIndex(index => {
      if (index === elements.length - 1) return 0
      return index + 1
    })
  }

  function showPrevElementMob() {
    setElementIndex(index => {
      if (index === 0) return elements.length - 1
      return index - 1
    })
  }

  console.log(category)

  const filterCategory = (item) => {
    dispatch(currentCategory(item))
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ display: "flex", width: "100%", height: "100%", position: "relative" }}
    >
      <div

        style={{
          height: "100px",
          width: "80%",
          display: "flex",
          borderRadius:"10px",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        {elements.map((val, index) => {


          if (category.category == val.cat) {
            return (
              <p
                className="img-slider-img "
                key={index}
                style={{ translate: `${-100 * elementIndex}%`, background: "#bbb", color: "#fff" }}
                onClick={() => { filterCategory(val.cat) }}>{val.cat}</p>
            )
          } else {
            return (
              <p
                className="img-slider-img "
                key={index}
                style={{ translate: `${-100 * elementIndex}%`, background: "#f5f5f5", color: "#444" }}
                onClick={() => { filterCategory(val.cat) }}>{val.cat}</p>
            )
          }
        })}
      </div>
      <div className="desktop">
        <button
          onClick={showPrevElement}
          className="img-slider-btn"
          style={{ left: "40px" }}
          aria-label="View Previous Image"
        >
          <span className="material-symbols-outlined">
            chevron_left
          </span>
        </button>
        <button
          onClick={showNextElement}
          className="img-slider-btn"
          style={{ right: "40px" }}
          aria-label="View Next Image"
        >
          <span className="material-symbols-outlined">
            chevron_right

          </span>
        </button>
      </div>
      <div className="mobile">
        <button
          onClick={showPrevElementMob}
          className="img-slider-btn"
          style={{ left: "10px" }}
          aria-label="View Previous Image"
        >
          <span className="material-symbols-outlined">
            chevron_left
          </span>
        </button>
        <button
          onClick={showNextElementMob}
          className="img-slider-btn"
          style={{ right: "10px" }}
          aria-label="View Next Image"
        >
          <span className="material-symbols-outlined">
            chevron_right
          </span>
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
      </div>
    </section>
  )
}