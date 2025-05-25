'use client'
import { useScrollToHash } from '@/hooks/useScrollToHash';
import { DetailedService } from '@/models/interfaces'
import Image from 'next/image';
import React, { JSX } from 'react';
import styles from './styles.module.css';
import Button from '../button/Button';

function GridServices({ service }: {service:DetailedService}): JSX.Element {
  const { title, intro, details, result, image, id, cta } = service;
  useScrollToHash()

  return (
    <section className={`section ${styles.section}`} id={id}>
      <h2>{title}</h2>
      <div>
        <figure>
          <Image src={image} alt='' fill loading='lazy' placeholder='blur' style={{objectFit: 'cover'}}/> 
        </figure>
        <article>
          <p>{intro}</p>
          <>{details}</>
          <p>{result}</p>
          <Button>Voir mes réalisations <span className='visually-hidden'>{cta ? `${cta}` : `de ${title}`}</span></Button>
        </article>

      </div>

    </section>
  )
}

export default GridServices