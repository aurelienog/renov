'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion';
import styles from './styles.module.css';

function HowItWorksSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end end"], // comienza cuando entra, termina cuando sale
  })

    // Mapea scroll [0, 1] a pathLength [0, 1]
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className='section'>
      <h2>Comment ça marche</h2>
      <div>
        <svg viewBox="0 0 800 600" fill="none" ref={containerRef} className={styles.path}>
        <motion.path 
          style={{ pathLength }}
          d="M 50 150 Q 150 50 250 200 Q 400 400 550 250 Q 750 100 700 300 C 600 550 800 450 750 400 C 700 350 450 400 400 450 A 200 50 148 0 0 300 550 "  
          stroke="black" 
          stroke-width="10"
          />
      </svg>
      </div>
      
    </section>
  )
}

export default HowItWorksSection