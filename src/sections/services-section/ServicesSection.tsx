'use client'
import React, { JSX, useRef } from 'react';
import styles from './styles.module.css';
import Gallery from '@/components/gallery/Gallery';
import { motion, useScroll, useTransform } from 'framer-motion';


function ServicesSection(): JSX.Element {
  const containerRef = useRef(null);


    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["center end", "end end"], // comienza cuando entra, termina cuando sale
    })

    const maskScale = useTransform(scrollYProgress, [0, 1], ['10%', '100%'])
  
  return (
    <motion.section className={`section full-width ${styles.section}`} style={{
      maskSize: maskScale
      }}>
      <h2>Mes prestations</h2>
      <div ref={containerRef}>
        <Gallery />
      </div>
      
      {/* <div className={styles.container}>
        <ServiceCard title='Peinture Intérieure' image={indoor}/>
        <ServiceCard title='Peinture Extérieure' image={indoor}/>
        <ServiceCard title='Teinture de Bois' image={wood}/>
        <ServiceCard title='Réparation et Préparation des Surfaces' image={reparation}/>
      </div>
       */}
    </motion.section>
  )
}

export default ServicesSection