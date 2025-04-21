import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './styles.module.css';

function TimelineCard({ name, description, icon }: { name:string, description: string, icon: StaticImageData}) {
  return (
    <article className={styles.card}>
      <Image src={icon} alt='' width={45} height={45} style={{ border: 'black', justifySelf:'center',}}/>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default TimelineCard
