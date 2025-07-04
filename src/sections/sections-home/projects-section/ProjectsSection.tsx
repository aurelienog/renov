import React, { JSX, Suspense } from 'react';
import styles from '@/sections/sections-home/projects-section/styles.module.css'
import { lastProjects } from '@/data/data';
import SliderWrapper from '@/components/slider/SliderWrapper';
import Loader from '@/app/(root)/loading';
import Link from 'next/link';

function ProjectsSection(): JSX.Element {

  return (
    <section className={`full-width ${styles.section}`}>
      <h2>Travaux récents</h2>  
      <Suspense fallback={<Loader/>}>
        <SliderWrapper lastProjects={lastProjects}/>
      </Suspense>
      <div>
        <Link className='button' href="/realisations">Voir mes réalisations</Link>
      </div>
      
    </section>
  )
}

export default ProjectsSection