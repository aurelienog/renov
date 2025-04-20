import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';

function GalleryCard({ image, title }: { image:StaticImageData, title: string }) {
  return (
    <div className={styles.card}>
      <Image src={image} alt=''/>
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  )
}

export default GalleryCard