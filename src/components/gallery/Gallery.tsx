import React, { JSX } from 'react';
import styles from './styles.module.css';
import GalleryCard from './GalleryCard';
import { services } from '../../data/data';

function Gallery(): JSX.Element {
  return (
    <div className={ styles.gallery }>
      {
        services?.map((project, index: number) => (
          <GalleryCard key={`${project.name}-${index}`} image={project.image} name={ project.name }/>
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