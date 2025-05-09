import React, { JSX } from 'react';
import styles from './styles.module.css'
import { lastProjects } from '@/data/data';
import SliderWrapper from '@/components/slider/SliderWrapper';

function ProjectsSection(): JSX.Element {

  return (
    <section className={`section full-width ${styles.section}`}>
      <h2>Travaux récents</h2>
      <SliderWrapper lastProjects={lastProjects}/>
    </section>
  )
}

export default ProjectsSection