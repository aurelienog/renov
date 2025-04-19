'use client'
import React, { JSX, useRef } from 'react';
import styles from './styles.module.css'
import { lastProjects } from '@/data/data';
import { StaticImageData } from 'next/image';
import ParallaxCard from '@/components/parallax-card/ParallaxCard';
import { useScroll } from 'framer-motion';

function ProjectsSection(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section className={`section breakout ${styles.section}`}>
      <h2>Travaux récents</h2>
      <div ref={container} className={styles.cardContainer}>
        { 
        lastProjects.map((project: StaticImageData, index:number) => {
          const targetScale = 1 - ((lastProjects.length  - index) * 0.05);
          return <ParallaxCard project={project} index={index} key={index} range={[index * 0.25, 1]} targetScale={targetScale} progress={scrollYProgress}/>
        })
      }
      </div>
    </section>
  )
}

export default ProjectsSection