import { ImageSlider } from "./ImageSlider"

const Slider = ({elements}) => {

  return (
    <div
    style={{
      maxWidth: "1200px",
      width: "100%",
      // aspectRatio: "10 / 6",
      margin: "0 auto",
    }}
  >
    <ImageSlider elements={elements} />
  </div>
  );
};
export default Slider