'use client'
import React, { JSX } from 'react'
import ParallaxCard from './ParallaxCard';
import { MotionValue } from 'framer-motion';
import { Project } from '@/lib/models/interfaces';

function ParallaxCardWrapper({ lastProjects, maskScale }: { lastProjects: Project[], maskScale: MotionValue<string>, }): JSX.Element {
  return (
    <>
      { 
        lastProjects?.map((project: Project, index:number) => {
          const isFirst = index === 0; 
          return <ParallaxCard aria-hidden='true' image={ project.image } description={ project.description } key={ index } maskSize={isFirst? maskScale : undefined}/>
        })
      }
    </>
  )
}

export default ParallaxCardWrapper