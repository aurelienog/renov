import React from 'react';
import styles from '@/sections/sections-realisations/styles.module.css';
import GalleryFilter from '@/components/projects-gallery/GalleryFilter';
import { Project } from '@/lib/models/interfaces';
import ScrollToTopButton from '@/components/scroll-to-top-button/ScrollToTopButton';
import ProjectsGalleryWrapper from '@/components/projects-gallery/ProjectsGalleryWrapper';

function LandingRealisations({ filteredProjects }: { filteredProjects: Project[]}) {
  return (
    <section aria-labelledby='realisations-accueil' className={`${styles.section} breakout section`}>
      <h1 id="realisations-accueil">Mes réalisations</h1>
      <GalleryFilter/>
      <ProjectsGalleryWrapper projects={filteredProjects}/>
      <ScrollToTopButton/>
    </section>
  )
}

export default LandingRealisations