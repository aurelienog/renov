'use client'
import React, { JSX } from 'react'
import ParallaxCard from './ParallaxCard';
import { StaticImageData } from 'next/image';
import { MotionValue } from 'framer-motion';

function ParallaxCardWrapper({ lastProjects, maskScale }: { lastProjects: StaticImageData[], maskScale: MotionValue<string>, }): JSX.Element {
  return (
    <>
      { 
        lastProjects.map((project: StaticImageData, index:number) => {
          const isFirst = index === 0; 
          return <ParallaxCard project={ project } key={ index } maskSize={isFirst? maskScale : undefined}/>
        })
      }
    </>
  )
}

export default ParallaxCardWrapper