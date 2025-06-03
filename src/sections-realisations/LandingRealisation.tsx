import React from 'react';
import styles from './styles.module.css';
import ProjectsGallery from '@/components/projects-gallery/ProjectsGallery';

function LandingRealisation() {
  return (
    <section className={` ${styles.section} section`}>
      <h1>Mes réalisations</h1>
      <ProjectsGallery/>
    </section>
  )
}

export default LandingRealisation