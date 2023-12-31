import React, { useState, useEffect } from 'react';
import './css/color.css';

export default function ColorChoice() {
  const [zoomedCard, setZoomedCard] = useState(null);

  useEffect(() => {
    const zoomIn = (card) => {
      if (zoomedCard === card) {
        return;
      }

      if (zoomedCard) {
        zoomedCard.style.transform = 'scale(1)';
      }

      setZoomedCard(card);
      card.style.transform = 'scale(1.3)';
    };

    const colorCards = document.querySelectorAll('.color-card');

    colorCards.forEach(card => {
      card.addEventListener('click', () => zoomIn(card));
    });

    return () => {
      colorCards.forEach(card => {
        card.removeEventListener('click', () => zoomIn(card));
      });
    };
  }, [zoomedCard]);

  return (
    <div className="color-cards">
      <div className="color-card" id="color1" data-aos="fade-right" data-aos-duration="500"></div>
      <div className="color-card" id="color2" data-aos="fade-right" data-aos-duration="500" data-aos-delay="50"></div>
      <div className="color-card" id="color3" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100"></div>
      <div className="color-card" id="color4" data-aos="fade-right" data-aos-duration="500" data-aos-delay="150"></div>
      <div className="color-card" id="color5" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200"></div>
    </div>
  );
}
