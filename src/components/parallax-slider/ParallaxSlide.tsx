'use client';

import React, { JSX } from 'react';
import ComparisonSlider from '../comparison-slider/ComparisonSlider';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { StaticImageData } from 'next/image';
import styles from './styles.module.css';

function ParallaxSlide({before, after, name, index, range, targetScale, progress, descriptionBefore, descriptionAfter}: {before: StaticImageData, after: StaticImageData, name: string, descriptionBefore: string, descriptionAfter: string, index: number, range:[number, number], targetScale:number, progress:MotionValue<number>}): JSX.Element {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <article className={styles.wrapper}>
      <motion.div className={styles.card} 
      style={{
      scale, 
      top: `calc(1% + ${index * 3}em)`,
      }}>
        <ComparisonSlider before={before} after={after} name={name}  descriptionBefore={descriptionBefore} descriptionAfter={descriptionAfter}/>
      </motion.div>
    </article>
  )
}

export default ParallaxSlide