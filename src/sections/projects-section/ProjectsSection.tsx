'use client'
import React, { JSX, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import styles from './styles.module.css'
import { lastProjects } from '@/data/data';
import { StaticImageData } from 'next/image';
import ParallaxCard from '@/components/parallax-card/ParallaxCard';

function ProjectsSection(): JSX.Element {
  const scrollRef= useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 20%', '15% 15%']
  })

  const maskScale = useTransform(scrollYProgress, [0, 1], ['30%', '100%'])

  return (
    <section className={`section full-width ${styles.section}`}>
      <h2>Travaux récents</h2>
      <div ref={scrollRef} className={styles.cardContainer}>
        { 
        lastProjects.map((project: StaticImageData, index:number) => {
          const isFirst = index === 0; 
          return <ParallaxCard project={ project } key={ index } maskSize={isFirst? maskScale : undefined}/>
        })
      }
      </div>
    </section>
  )
}

export default ProjectsSection