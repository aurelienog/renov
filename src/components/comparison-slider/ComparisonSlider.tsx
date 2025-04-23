'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState, useRef } from 'react';
import styles from './styles.module.css';

function ComparisonSlider({ before, after, name} : { before: StaticImageData, after:StaticImageData, name: string }) {
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

  return (
    <article className={styles.wrapper} aria-label={`comparaison avant-après d'une salle ${name}`}>
      <figcaption className="visually-hidden">
      Bouger le curseur pour comparer les travaux avant après.
      </figcaption>

      <figure
        ref={containerRef}
        className={`${styles.afterContainer} ${styles.imagesContainer}`}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <Image src={after} alt="salle de bain après la rénovation" fill style={{ objectFit: 'cover', borderRadius: 'var(--border-radius)'}}/>

        <span
          className={`${styles.beforeContainer} ${styles.imagesContainer}`}
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image src={before} alt="salle de bain avant la rénovation" fill style={{ objectFit: 'cover', borderRadius: 'var(--border-radius)'}}/>
        </span>

        {/* Slider visual */}
        <div
          className={styles.sliderLine}
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
          role="presentation"
          aria-hidden="true"
        ></div>

        <div
          className={styles.sliderBtn}
          style={{ left: `calc(${sliderPosition}% - 1em)` }}
          role="presentation"
          aria-hidden="true"
        > 
        </div>

        {/* Slider accesible */}
        <input
          type="range"
          step={10}
          min={5}
          max={95}
          value={sliderPosition}
          onChange={handleKeyboardChange}
          className="visually-hidden"
          aria-label="Élément de saisie pour comparer les photos avant après" aria-valuemin={5} aria-valuemax={95} aria-valuenow={sliderPosition}
        />
      </figure>
    </article>
  );
}

export default ComparisonSlider;
