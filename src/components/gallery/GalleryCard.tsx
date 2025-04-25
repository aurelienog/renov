import React, { JSX } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { motion, MotionValue } from 'framer-motion';


function GalleryCard({ image, name, isInView, rank }: { image:StaticImageData, name: string, isInView: MotionValue, rank: number }): JSX.Element {

  return (
    <motion.article 
    className={styles.card} 
    style={{ transformOrigin: 'bottom' }}
    initial={{ opacity: 0, scale: 0.2 }}
    animate={ isInView ? { opacity: 1, scale: [0.2, 1.1, 0.96] } : undefined }
    transition={{
      opacity: { duration: 0.3, delay: 0.2 * rank },
      scale: {
      times: [0, 0.5, 1],
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.2 * rank
    }
  }}
>
  <Link href="/">
    <Image src={image} alt={name}  sizes="(max-width: 768px) 55vw, (max-width: 1200px) 33vw, 20vw" quality={50} placeholder="blur"/>
    <div className={styles.overlay}>
      <h3 className={styles.title}>{name}</h3>
    </div>   
  </Link>
    </motion.article>
    
  )
}

export default GalleryCard