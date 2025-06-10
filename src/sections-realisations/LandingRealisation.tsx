import React from 'react';
import styles from './styles.module.css';
import GalleryGrid from '@/components/projects-gallery/GalleryGrid';
import GalleryFilter from '@/components/projects-gallery/GalleryFilter';
import { Project } from '@/lib/models/interfaces';

function LandingRealisation({ filteredProjects }: { filteredProjects: Project[]}) {
  return (
    <section className={` ${styles.section} breakout  section`}>
      <h1>Mes réalisations</h1>
      <aside>
        <GalleryFilter/>
      </aside>
      <GalleryGrid projects={filteredProjects}/>
    </section>
  )
}

export default LandingRealisation