import React, { JSX } from 'react';
import styles from './styles.module.css';


function ServicesSection(): JSX.Element {
  
  return (
    <section className={`section full-width ${styles.section}`}>


      
      {/* <div className={styles.container}>
        <ServiceCard title='Peinture Intérieure' image={indoor}/>
        <ServiceCard title='Peinture Extérieure' image={indoor}/>
        <ServiceCard title='Teinture de Bois' image={wood}/>
        <ServiceCard title='Réparation et Préparation des Surfaces' image={reparation}/>
      </div>
       */}
    </section>
  )
}

export default ServicesSection