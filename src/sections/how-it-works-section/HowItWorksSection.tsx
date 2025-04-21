'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion';
import styles from './styles.module.css';
import TimelineCard from '@/components/timeline-card/TimelineCard';
import { workSteps } from '../../data/data';
import { WorkStep } from '@/models/interfaces';


function HowItWorksSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end end"], // comienza cuando entra, termina cuando sale
  })

    // Mapea scroll [0, 1] a pathLength [0, 1]
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className={`section breakout ${styles.section}`}>
      <h2>Comment ça marche</h2>
      <div className={styles.timeline}>
        {
        workSteps.map((step: WorkStep, index: number) => (
          <TimelineCard key={`${step.name}${index}`} {...step}/>
        ))
      }
      </div>
      
      <div className='path'>
        <svg viewBox="0 0 800 600" fill="none" ref={containerRef} className={styles.path}>
        <motion.path 
          style={{ pathLength }}
          d="M 1 118 Q 112 56 236 162 Q 362 271 487 165 Q 603 64 658 183 C 697 272 750 336 697 349 C 558 374 591 432 537 478 Q 452 540 301 422 C 238 367 126 432 101 528  "
          //d="M 0 100 Q 150 50 229 159 Q 304 278 486 179 Q 616 118 657 220 C 685 285 767 415 629 447 C 518 470 425 453 281 400 Q 30 292 102 500 "  
          stroke="black" 
          stroke-width="10"
          />
      </svg>
      </div>
      
    </section>
  )
}

export default HowItWorksSection