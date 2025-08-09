import LandingRealisation from '@/sections/sections-realisations/LandingRealisations';
import React from 'react';
import { projects } from '../../data/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mes Réalisations"
}

async function page({ searchParams }: { 
  searchParams: Promise< {service?: string}>
}) {

  const query = (await searchParams).service;
  const filteredProjects = query? projects.filter((project) => project.service === query ) : projects ;

  
  return (
    <main className='base-layout'>
      <LandingRealisation filteredProjects={filteredProjects}/>
    </main>
  )
}

export default page