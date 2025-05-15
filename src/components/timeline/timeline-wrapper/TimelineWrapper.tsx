'use client'
import React, { useRef } from 'react';
import TimelineLine from '../Timeline-line/TimelineLine';
import { WorkStep } from '@/models/interfaces';
import { useScroll, useTransform } from 'framer-motion';
import TimelineCard from '../timeline-card/TimelineCard';
import styles from './styles.module.css'
;
function TimelineWrapper({ workSteps }: { workSteps: WorkStep[]}) {
  const containerRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["center end", "end end"], // comienza cuando entra, termina cuando sale
    })
  
      // Mapea scroll [0, 1] a pathLength [0, 1]
      const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className={styles.timeline}>
      { workSteps.map((step: WorkStep, index: number) => (
        <TimelineCard key={`${step.name}${index}`} {...step}/>
        ))
      } 
      <TimelineLine pathLength={pathLength}/>
    </div>
  )
}

export default TimelineWrapper