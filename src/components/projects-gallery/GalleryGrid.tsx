import React from 'react';
import styles from './styles.module.css'
import { Project } from '@/lib/models/interfaces';
import GalleryItem from './GalleryItem';

function GalleryGrid( { projects }: { projects : Project[]} ) {
  return (
    <ul className={`${styles.wrapper}`}>
      {projects.map((p : Project, index : number) => (
        <GalleryItem key={index} project={p}/>
      ))}
    </ul>
  )
} 

export default GalleryGrid