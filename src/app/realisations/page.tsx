import LandingRealisation from '@/sections/sections-realisations/LandingRealisations';
import React from 'react';
import { projects } from '../../data/projects';

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