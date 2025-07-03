'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState, useRef, JSX } from 'react';
import styles from './styles.module.css';
import SliderLine from './SliderLine';

function ComparisonSlider({ before, after, name, descriptionBefore, descriptionAfter} : { before: StaticImageData, after:StaticImageData, name: string, descriptionBefore: string, descriptionAfter: string }): JSX.Element {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min((x / rect.width) * 100, 95));
    setSliderPosition(percent);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(event.clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 1) {
      updatePosition(event.touches[0].clientX);
    }
  };

  const handleKeyboardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(event.target.value));
  };

  const safeName = name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  return (
    <article className={styles.wrapper} aria-labelledby={`slider-title-${safeName}`} role="group">
      <h3 id={`slider-title-${safeName}`} className='visually-hidden'>Comparaison avant-après {name}. Avant : {descriptionBefore}; Après : {descriptionAfter}</h3>
      <figure
        ref={containerRef}
        className={`${styles.afterContainer} ${styles.imagesContainer}`}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      > 
        <Image src={after} aria-hidden='true' alt='' placeholder="blur" fill sizes="(max-width: 768px) 100vw, 60vw" quality={75} style={{ objectFit: 'cover', borderRadius: 'var(--border-radius)'}}/>

        <span className={`${styles.beforeContainer} ${styles.imagesContainer}`} style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image src={before} aria-hidden='true' alt=''  placeholder="blur" fill sizes="(max-width: 768px) 100vw, 60vw" quality={75} style={{ objectFit: 'cover', borderRadius: 'var(--border-radius)'}}/>
        </span>

        
        {/* visual separator*/}
        <SliderLine sliderPosition={sliderPosition}/>

        {/* Slider accesible */}
        <label htmlFor={`comparison-slider-${safeName}`}>
            Curseur de comparaison. Utilisez les flèches gauche et droite pour ajuster la vue entre les deux photos.
        </label>
        <input
          id={`comparison-slider-${safeName}`}
          type="range"
          step={10}
          min={5}
          max={95}
          value={sliderPosition}
          onChange={handleKeyboardChange}
          className="visually-hidden"
          aria-valuemin={5} aria-valuemax={95} aria-valuenow={sliderPosition}
        />
      </figure>
    </article>
  );
}

export default ComparisonSlider;
