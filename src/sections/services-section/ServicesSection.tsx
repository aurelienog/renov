import React from 'react'
import styles from './styles.module.css'
import ServiceCard from '@/components/service-card/ServiceCard'

function ServicesSection() {
  return (
    <section className={`section  ${styles.section}`}>
      <h2>Mes prestations</h2>
      <div>
        <ServiceCard title='Peinture Intérieure' image='/assets/images/indoor.webp'/>
        <ServiceCard title='Peinture Extérieure' image='/assets/images/wood.webp'/>
        <ServiceCard title='Teinture de Bois' image='/assets/images/wood.webp'/>
        <ServiceCard title='Réparation et Préparation des Surfaces' image='/assets/images/reparation'/>
      </div>
      
    </section>
  )
}

export default ServicesSection