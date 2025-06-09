import React from 'react';
import styles from './styles.module.css';
import ProjectsGallery from '@/components/projects-gallery/ProjectsGallery';
import { projects } from '../data/projects';

function LandingRealisation() {
  return (
    <section className={` ${styles.section} breakout  section`}>
      <h1>Mes réalisations</h1>
      <ProjectsGallery projects={projects}/>
    </section>
  )
}

export default LandingRealisation