import React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';
import { Project } from '@/lib/models/interfaces';

function GalleryGrid( { projects }: { projects : Project[]} ) {
  return (
    <ul className={`${styles.wrapper}`}>
      {projects.map((p : Project, index : number) => (
        <li key={index}>
          <Image src={p.image} alt={p.description} sizes='(max-width: 970px) 100vw, (max-width: 1400px) 50vw, 33vw"'  placeholder='blur' style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '1rem'}}/>
        </li>
      ))}
    </ul>
  )
} 

export default GalleryGrid