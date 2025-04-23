import React from 'react';
import styles from './styles.module.css'
import Image, { StaticImageData } from 'next/image';

function ParallaxCard({ project }: { project: StaticImageData }) {

  return (
    <article className={styles.container}>
      <div className={styles.card} >
        <Image src={project} alt='' fill style={{ objectFit: 'cover' }}/>
      </div>
    </article>
  )
}

export default ParallaxCard