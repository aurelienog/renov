'use client';
import React, { JSX, useRef } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion';
import styles from './styles.module.css';
import TimelineCard from '@/components/timeline-card/TimelineCard';
import { workSteps } from '../../data/data';
import { WorkStep } from '@/models/interfaces';


function HowItWorksSection(): JSX.Element {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end end"], // comienza cuando entra, termina cuando sale
  })

    // Mapea scroll [0, 1] a pathLength [0, 1]
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className={`section breakout ${styles.section}`}>
      <h2>Le processus</h2>
      <div className={styles.timeline}>
        {
        workSteps.map((step: WorkStep, index: number) => (
          <TimelineCard key={`${step.name}${index}`} {...step}/>
        ))
      }
      </div>
      
      <div className='path'>
        <svg viewBox="0 0 800 800" fill="none" ref={containerRef} className={styles.path}>
        <motion.path 
          style={{ pathLength }}
          d="M 0 129 Q 112 56 243 141 Q 390 248 509 168 Q 594 104 658 183 C 708 247 734 342 664 349 Q 544 362 510 460 C 473 559 347 434 250 428 C 157 423 124 469.5 103 548 " 
          stroke="black" 
          stroke-width="6"
          />
        </svg>
      </div>
      
    </section>
  )
}

export default HowItWorksSection