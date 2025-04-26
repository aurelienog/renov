'use client'
import React, { JSX, useRef } from 'react';
import styles from './styles.module.css';
import GalleryCard from './GalleryCard';
import { services } from '../../data/data';
import { useInView } from 'framer-motion';

function Gallery(): JSX.Element {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });

  return (
    <div ref={containerRef} className={ styles.gallery }>
      {
        services?.map((project, index: number) => (
          <GalleryCard key={`${project.name}-${index}`} image={project.image} name={project.name} rank={project.rank} isInView={isInView}/>
        ))
      }
    </div>
  )
}

export default Gallery