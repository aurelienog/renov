import React from 'react';
import styles from './styles.module.css'
import Image, { StaticImageData } from 'next/image';
import { motion, MotionValue, useTransform } from 'framer-motion';

function ParallaxCard({project, index, range, targetScale, progress}: {project: StaticImageData, index: number, range:[number, number], targetScale:number, progress:MotionValue<number>}) {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <article className={styles.container}>
      <motion.div className={styles.card} style={{scale, top: `calc(-10% + ${index * 25}px)` }}>
        <Image src={project} alt='' fill style={{ objectFit: 'cover', borderRadius: 'var(--border-radius)'}}/>
      </motion.div>
    </article>
  )
}

export default ParallaxCard