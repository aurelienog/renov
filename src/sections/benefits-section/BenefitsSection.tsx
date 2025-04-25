'use client'
import ComparisonChart from '@/components/comparison-chart/ComparisonChart';
import React, { JSX, useRef } from 'react';
import styles from './styles.module.css';
import { motion, useInView } from 'framer-motion';


function BenefitsSection(): JSX.Element {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true, margin: '-50%' })

  return (
    <section ref={containerRef} className={`full-width base-layout section ${styles.benefits}`}>
      <h2>Quel professionnel choisir?</h2>
      <motion.div 
      className={styles.container}
      initial={{ translate: '-100%' }}
      animate={ isInView ? { translate: '0' } : undefined }
      transition={{
        translate: { duration: 0.5,  ease: 'easeInOut',
      }
    }}>
        <ComparisonChart/>
      </motion.div>
    </section>
  )
};

export default BenefitsSection