import React, { JSX } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';


function GalleryCard({ image, name }: { image:StaticImageData, name: string }): JSX.Element {

  return (
    <article className={styles.card}>
      <Link href="/">
        <Image src={image} alt="" sizes="(min-width: 960px) 300px, (min-width: 540px) calc(-4.75vw + 459px), (min-width: 400px) calc(87.5vw - 22px), 80vw" width={300} height={300} quality={50} placeholder="blur"/>
        <div className={styles.overlay}>
      <h3>{name}</h3>
      </div>   
      </Link>
    </article>
    
  )
}

export default GalleryCard