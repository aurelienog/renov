import React, { JSX } from 'react';
import styles from './styles.module.css';
import GalleryCard from './GalleryCard';
import { Service } from '@/lib/models/interfaces';

function Gallery({ services } : { services: Service[] }): JSX.Element {

  return (
    <div className={ styles.gallery }>
      {
        services?.map((service: Service, index: number) => (
          <GalleryCard key={`${service.name}-${index}`} image={service.image} name={service.name} id={service.id}/>
        ))
      }
    </div>
  )
}

export default Gallery