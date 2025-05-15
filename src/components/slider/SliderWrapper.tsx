'use client'
import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import ParallaxCard from '../parallax-card/ParallaxCard';
import { StaticImageData } from 'next/image';



function SliderWrapper({lastProjects}: {lastProjects: StaticImageData[]}) {
  const scrollRef= useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 20%', '15% 15%']
  })

  const maskScale = useTransform(scrollYProgress, [0, 1], ['30%', '100%'])
  return (
    <div ref={scrollRef}>
        { 
        lastProjects.map((project: StaticImageData, index:number) => {
          const isFirst = index === 0; 
          return <ParallaxCard project={ project } key={ index } maskSize={isFirst? maskScale : undefined}/>
        })
      }
    </div>
  )
}

export default SliderWrapper