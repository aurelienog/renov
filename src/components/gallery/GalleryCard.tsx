import React, { JSX } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';


function GalleryCard({ image, name, id }: { image:StaticImageData, name: string, id:string }): JSX.Element {

  return (
    <article className={styles.card}>
      <Link href={`/prestations#${id}`}>
        <Image src={image} alt="" sizes="300px" width={300} height={300} quality={50} placeholder="blur"/>
        <div className={styles.overlay}>
      <h3>{name}</h3>
      </div>   
      </Link>
    </article>
    
  )
}

export default GalleryCard