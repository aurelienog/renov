import React, { JSX, Suspense } from 'react';
import styles from './styles.module.css'
import { lastProjects } from '@/data/data';
import SliderWrapper from '@/components/slider/SliderWrapper';

function ProjectsSection(): JSX.Element {

  return (
    <section className={`section full-width ${styles.section}`}>
      <h2>Travaux récents</h2>
      <Suspense>
        <SliderWrapper lastProjects={lastProjects}/>
      </Suspense>
    </section>
  )
}

export default ProjectsSection