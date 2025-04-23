
import React, { JSX } from 'react';
import styles from './styles.module.css'
import { lastProjects } from '@/data/data';
import { StaticImageData } from 'next/image';
import ParallaxCard from '@/components/parallax-card/ParallaxCard';

function ProjectsSection(): JSX.Element {

  return (
    <section className={`section full-width ${styles.section}`}>
      <h2>Travaux récents</h2>
      <div className={styles.cardContainer}>
        { 
        lastProjects.map((project: StaticImageData, index:number) => {
          return <ParallaxCard project={ project } key={ index }/>
        })
      }
      </div>
    </section>
  )
}

export default ProjectsSection