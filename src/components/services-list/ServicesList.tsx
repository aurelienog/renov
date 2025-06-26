'use client'
import { useScrollToHash } from '@/lib/hooks/useScrollToHash';
import { DetailedService } from '@/lib/models/interfaces'
import Image from 'next/image';
import React, { JSX } from 'react';
import styles from './styles.module.css';
import Button from '../button-cta/Button';
import { useOpenDetails } from '@/lib/hooks/useOpenDetails';
import Link from 'next/link';

function ServicesList({ service, index }: {service:DetailedService, index: number}): JSX.Element {
  const { title, intro, details, result, image, id, cta, prestation } = service;
  useScrollToHash()
  const isOpen = useOpenDetails(id);

  return (
    <details className={`${styles.details}`} id={id} open={isOpen}>
      <summary>{title}</summary>
      <div>
        <figure className={index % 2 == 0 ? styles.reverse : ''}>
          <Image src={image} alt='' fill loading='lazy' placeholder='blur' style={{objectFit: 'cover'}}/> 
        </figure>
        <article>
          <p>{intro}</p>
          <>{details}</>
          <p>{result}</p>
          <Link href={`/realisations?service=${prestation}`}><Button>Voir mes réalisations <span className='visually-hidden'>{cta ? `${cta}` : `de ${title}`}</span></Button></Link>
        </article>
      </div>

    </details>
  )
}

export default ServicesList