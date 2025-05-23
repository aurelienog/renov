import { DetailedService } from '@/models/interfaces'
import Image from 'next/image';
import React, { JSX } from 'react'

function GridServices({ service }: {service:DetailedService}): JSX.Element {
  const { title, intro, details, result, image } = service;
  return (
    <article className='section'>
      <h2>{title}</h2>
      <p>{intro}</p>
      <>{details}</>
      <p>{result}</p>
      <Image src={image} alt='' width={150} height={150} loading='lazy' placeholder='blur'/> 
    </article>
  )
}

export default GridServices