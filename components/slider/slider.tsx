'use client';


import React, { useState, useEffect } from 'react';
import './styles.css';

interface Slide {
  image?: string;
  title?: string;
  description?: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % slides?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + slides?.length) % slides?.length);
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>Previous</button>
      <div className="slides" style={{ transform: `translateX(-${(currentIndex / slidesToShow) * 100}%)` }}>
        {slides?.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
