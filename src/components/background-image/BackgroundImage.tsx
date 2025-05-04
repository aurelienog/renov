import React, { JSX }  from 'react';
import Image, { StaticImageData } from "next/image";
import styles from './styles.module.css';

function BackgroundImage({ image }: {image: StaticImageData}): JSX.Element  {
  return (
    <figure className={styles.wrapper}>
      <Image src={image} placeholder='blur' priority sizes='100dvw' quality={100} fill style={{ objectFit: 'cover' }} 
      alt="montre une cuisine spacieuse et lumineuse. L'esthétique générale est épurée, élégante et moderne. Il y a un îlot de cuisine avec quatre chaises en bois. La cuisine est éclairée par des suspensions et dispose d'une grande fenêtre avec des stores blancs." />
      <div className={styles.overlay}>
      </div>
    </figure>
  )
}

export default BackgroundImage