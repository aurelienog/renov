import React, { JSX } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';


function GalleryCard({ image, name }: { image:StaticImageData, name: string }): JSX.Element {

  return (
    <article className={styles.card}>
      <Link href="/">
        <Image src={image} alt="" loading='lazy'  sizes="(max-width: 768px) 55vw, (max-width: 1200px) 33vw, 20vw" quality={50} placeholder="blur"/>
        <div className={styles.overlay}>
      <h3>{name}</h3>
      </div>   
      </Link>
    </article>
    
  )
}

export default GalleryCard