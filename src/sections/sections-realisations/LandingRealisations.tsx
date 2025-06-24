import React from 'react';
import styles from './styles.module.css';
import GalleryFilter from '@/components/projects-gallery/GalleryFilter';
import { Project } from '@/lib/models/interfaces';
import ScrollToTopButton from '@/components/scroll-to-top-button/ScrollToTopButton';
import ProjectsGalleryWrapper from '@/components/projects-gallery/ProjectsGalleryWrapper';

function LandingRealisations({ filteredProjects }: { filteredProjects: Project[]}) {
  return (
    <section className={`${styles.section} breakout section`}>
      <h1>Mes réalisations</h1>
      <GalleryFilter/>
      <ProjectsGalleryWrapper projects={filteredProjects}/>
      <ScrollToTopButton/>
    </section>
  )
}

export default LandingRealisations