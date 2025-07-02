import Image, { StaticImageData } from 'next/image';
import React, { JSX } from 'react';
import styles from './styles.module.css';

function TimelineCard({ name, description, icon }: { name:string, description: string, icon: StaticImageData}): JSX.Element {
  return (
    <article className={styles.card}>
      <Image src={icon} alt='' loading='lazy' width={48} height={48} style={{ border: 'black', justifySelf:'center'}}  aria-hidden="true"/>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default TimelineCard
