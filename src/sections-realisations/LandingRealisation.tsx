import React from 'react';
import styles from './styles.module.css';
import GalleryGrid from '@/components/projects-gallery/GalleryGrid';
import GalleryFilter from '@/components/projects-gallery/GalleryFilter';
import { Project } from '@/lib/models/interfaces';
import Link from 'next/link';

function LandingRealisation({ filteredProjects }: { filteredProjects: Project[]}) {
  return (
    <section className={`${styles.section} breakout section`}>
      <h1>Mes réalisations</h1>
      <GalleryFilter/>
      <GalleryGrid projects={filteredProjects}/>
      <Link href={'#service-select'} ><button className='glassmorphism'
      style={{ backgroundColor: 'rgb(255, 255, 255, 0.4)', 
      aspectRatio: '1/1',
      width: '50px',
      borderRadius: '50px',
      border: 'none', cursor: 'pointer'}}>⬆</button></Link>
    </section>
  )
}

export default LandingRealisation