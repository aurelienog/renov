import React, { JSX } from 'react';
import styles from './styles.module.css'
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

function ParallaxCard({ project, maskSize, scrollRef }: { project: StaticImageData }): JSX.Element {
  console.log(maskSize)
  return (
    <article className={styles.container}>
      <motion.div className={styles.card} ref={scrollRef}  style={ 
          maskSize
            ? {
                maskImage: "url('/assets/TEST.png')",
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: maskSize,
              }
            : undefined
        }>
        <Image src={project} alt='' fill style={{ objectFit: 'cover' }}/>
      </motion.div>
    </article>
  )
}

export default ParallaxCard