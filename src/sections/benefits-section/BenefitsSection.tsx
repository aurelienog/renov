'use client'
import ComparisonChart from '@/components/comparison-chart/ComparisonChart';
import React, { JSX, useRef } from 'react';
import styles from './styles.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';


function BenefitsSection(): JSX.Element {
  const containerRef= useRef<HTMLElement>(null);

  const { scrollYProgress }  = useScroll({
    target: containerRef,
    offset: ['0 1', '1.33 1']
  })

  const scale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1])

  return (
    <section ref={containerRef} className={`full-width base-layout section ${styles.benefits}`}>
      <h2>Quel professionnel choisir?</h2>
      <motion.div 
      className={styles.container}
      style={{transformOrigin: 'center', scale}}
    >
        <ComparisonChart/>
      </motion.div>
    </section>
  )
};

export default BenefitsSection