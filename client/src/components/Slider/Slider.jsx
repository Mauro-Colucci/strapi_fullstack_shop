import "./slider.scss";
import { EastOutlined, WestOutlined } from "@mui/icons-material";
import { useState } from "react";

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
    "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slide">
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
