import React, { JSX } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

function GalleryCard({ image, name }: { image:StaticImageData, name: string }): JSX.Element {
  return (
    <Link href={'/'} className={styles.card}>
      <Image src={image} alt=''/>
      <div className={styles.overlay}>
        <h3 className={styles.title}>{name}</h3>
      </div>
    </Link>
  )
}

export default GalleryCard