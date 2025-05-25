'use client'
import { useScrollToHash } from '@/lib/hooks/useScrollToHash';
import { DetailedService } from '@/lib/models/interfaces'
import Image from 'next/image';
import React, { JSX } from 'react';
import styles from './styles.module.css';
import Button from '../button/Button';
import { useOpenDetails } from '@/lib/hooks/useOpenDetails';

function GridServices({ service }: {service:DetailedService}): JSX.Element {
  const { title, intro, details, result, image, id, cta } = service;
  useScrollToHash()
  const isOpen = useOpenDetails(id);

  return (
    <details className={`${styles.details}`} id={id} open={isOpen}>
      <summary>{title}</summary>
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

    </details>
  )
}

export default GridServices