'use client'
import React, { JSX } from 'react';
import styles from './styles.module.css'
import { lastProjects } from '@/data/data';
import dynamic from 'next/dynamic';

const SliderWrapper = dynamic(() => import('../../components/slider/SliderWrapper'), {
  ssr: false,  // Esto desactiva el SSR para este componente
});

function ProjectsSection(): JSX.Element {

  return (
    <section className={`section full-width ${styles.section}`}>
      <h2>Travaux récents</h2>
      <SliderWrapper lastProjects={lastProjects}/>
    </section>
  )
}

export default ProjectsSection