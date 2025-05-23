'use client'
import { useScrollToHash } from '@/hooks/useScrollToHash';
import { DetailedService } from '@/models/interfaces'
import Image from 'next/image';
import React, { JSX } from 'react'

function GridServices({ service }: {service:DetailedService}): JSX.Element {
  const { title, intro, details, result, image, id } = service;
  useScrollToHash()

  return (
    <section className='section' id={id}>
      <h2>{title}</h2>
      <h3>{intro}</h3>
      <>{details}</>
      <p>{result}</p>
      <Image src={image} alt='' width={150} height={150} loading='lazy' placeholder='blur'/> 
    </section>
  )
}

export default GridServices