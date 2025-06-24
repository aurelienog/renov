import React, { JSX, Suspense } from 'react';
import styles from './styles.module.css'
import { lastProjects } from '@/data/data';
import SliderWrapper from '@/components/slider/SliderWrapper';
import Loader from '../../../app/(root)/loading';

function ProjectsSection(): JSX.Element {

  return (
    <section className={`section full-width ${styles.section}`}>
      <h2>Travaux récents</h2>
      <Suspense fallback={<Loader/>}>
        <SliderWrapper lastProjects={lastProjects}/>
      </Suspense>
    </section>
  )
}

export default ProjectsSection