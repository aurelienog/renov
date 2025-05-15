import React, { JSX } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';


function GalleryCard({ image, name }: { image:StaticImageData, name: string }): JSX.Element {

  return (
    <article className={styles.card}>
      <Link href="/prestations">
        <Image src={image} alt="" sizes="(min-width: 900px) 533px, (min-width: 520px) 730px, 151vw" width={300} height={300} quality={50} placeholder="blur"/>
        <div className={styles.overlay}>
      <h3>{name}</h3>
      </div>   
      </Link>
    </article>
    
  )
}

export default GalleryCard