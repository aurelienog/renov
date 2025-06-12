import React from 'react';
import styles from './styles.module.css';
import GalleryGrid from '@/components/projects-gallery/GalleryGrid';
import GalleryFilter from '@/components/projects-gallery/GalleryFilter';
import { Project } from '@/lib/models/interfaces';

import ScrollToTopButton from '@/components/scroll-to-top-button/ScrollToTopButton';

function LandingRealisation({ filteredProjects }: { filteredProjects: Project[]}) {
  return (
    <section className={`${styles.section} breakout section`}>
      <h1>Mes réalisations</h1>
      <GalleryFilter/>
      <GalleryGrid projects={filteredProjects}/>
      <ScrollToTopButton/>
    </section>
  )
}

export default LandingRealisation