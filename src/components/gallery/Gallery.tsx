import React from 'react';
import autre from '../../../public/assets/autre.jpg';
import revetement from '../../../public/assets/revetement.jpg';
import indoor from '../../../public/assets/peinture-interieur.jpg';
import parquet from '../../../public/assets/parquet.jpg';
import preparation from '../../../public/assets/preparation.jpg';
import bois from '../../../public/assets/bois.jpg';
import styles from './styles.module.css';
import GalleryCard from './GalleryCard';

function Gallery() {
  return (
    <article className={styles.gallery}>
      <GalleryCard image={revetement} title={'Revêtements muraux'}/>
      <GalleryCard image={parquet} title={'Revêtements de sols'}/>
      <GalleryCard image={bois} title={'Rénovation de boiseries'}/>
      <GalleryCard image={indoor} title={'Peinture intérieure'}/>
      <GalleryCard image={preparation} title={'Peinture extérieure'}/>
      <GalleryCard image={preparation} title={'Préparation des supports'}/>
      <GalleryCard image={bois} title={'Enduits décoratifs'}/>
      <GalleryCard image={autre} title={'Petits travaux complémentaires'}/>
    </article>
  )
}

export default Gallery