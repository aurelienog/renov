import React, { JSX } from 'react';
import styles from './styles.module.css';
import ServiceCard from '@/components/service-card/ServiceCard';
import indoor from '../../../public/assets/images/indoor.webp';
import reparation from '../../../public/assets/images/reparation.webp';
import wood from '../../../public/assets/images/wood.webp';

function ServicesSection(): JSX.Element {
  return (
    <section className={`section full-width ${styles.section}`}>
      <h2>Mes prestations</h2>
      <div className={styles.container}>
        <ServiceCard title='Peinture Intérieure' image={indoor}/>
        <ServiceCard title='Peinture Extérieure' image={indoor}/>
        <ServiceCard title='Teinture de Bois' image={wood}/>
        <ServiceCard title='Réparation et Préparation des Surfaces' image={reparation}/>
      </div>
      
    </section>
  )
}

export default ServicesSection