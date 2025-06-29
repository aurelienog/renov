import React, { JSX }  from 'react';
import Image, { StaticImageData } from "next/image";
import styles from './styles.module.css';

function BackgroundImage({ image, overlay }: {image: StaticImageData, overlay?: boolean}): JSX.Element  {
  return (
    <figure className={`full-width ${styles.wrapper}`}>
      <div style={{position: 'relative', width: '100%', height: '100%'}}>
        <Image src={image} placeholder='blur' priority sizes="100vw" quality={75} style={{ objectFit: 'cover', width: '100%', height:'100%'}} 
        alt="montre une cuisine spacieuse et lumineuse. L'esthétique générale est épurée, élégante et moderne. Il y a un îlot de cuisine avec quatre chaises en bois. La cuisine est éclairée par des suspensions et dispose d'une grande fenêtre avec des stores blancs." />
        <div className={overlay? styles.overlay : ''}></div></div> 
    </figure>
  )
}

export default BackgroundImage