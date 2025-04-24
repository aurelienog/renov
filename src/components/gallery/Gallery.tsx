'use client'
import React, { JSX, useRef } from 'react';
import styles from './styles.module.css';
import GalleryCard from './GalleryCard';
import { services } from '../../data/data';
import { useInView } from 'framer-motion';

function Gallery(): JSX.Element {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-50%' });

  return (
    <div ref={containerRef} className={ styles.gallery }>
      {
        services?.map((project, index: number) => (
          <GalleryCard key={`${project.name}-${index}`} image={project.image} name={project.name} rank={project.rank} isInView={isInView}/>
        ))
      }
{/* 
      <GalleryCard image={revetement} title={'Revêtements muraux'}/>
      <GalleryCard image={revetement} title={'Revêtements muraux'}/>
      <GalleryCard image={parquet} title={'Revêtements de sols'}/>
      <GalleryCard image={bois} title={'Rénovation de boiseries'}/>
      <GalleryCard image={indoor} title={'Peinture intérieure'}/>
      <GalleryCard image={preparation} title={'Peinture extérieure'}/>
      <GalleryCard image={preparation} title={'Préparation des supports'}/>
      <GalleryCard image={bois} title={'Enduits décoratifs'}/>
      <GalleryCard image={autre} title={'Petits travaux complémentaires'}/> */}
    </div>
  )
}

export default Gallery