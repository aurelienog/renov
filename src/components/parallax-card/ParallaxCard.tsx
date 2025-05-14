import React, { JSX } from 'react';
import styles from './styles.module.css'
import Image, { StaticImageData } from 'next/image';
import { motion, MotionValue } from 'framer-motion';


function ParallaxCard({ project, maskSize }: { project: StaticImageData, maskSize?: MotionValue<string>, }): JSX.Element {

  return (
    <article className={styles.container}>
      <motion.div className={styles.card} style={ 
          maskSize
            ? {
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: maskSize,
              }
            : undefined
        }>
        <Image src={project} alt='' sizes="(min-width: 1260px) 100vw, 300.64vw" fill placeholder='blur' quality={70} style={{ objectFit: 'cover' }}/>
      </motion.div>
    </article>
  )
}

export default ParallaxCard