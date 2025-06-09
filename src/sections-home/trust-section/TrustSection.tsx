import React, { JSX } from 'react';
import styles from './styles.module.css'
import Image, { StaticImageData } from 'next/image';
import AnimatedCounter from '@/components/animated-counter/AnimatedCounter';
import { statistics } from '../../data/data'
import { TrustStatistic } from '@/lib/models/interfaces';

function TrustSection(): JSX.Element {

  return (
    <section className={`full-width ${styles.section}`}>
      {statistics.map((stat: TrustStatistic, index: number) => (
        <article key={index} className={styles.article}>
          {Array.isArray(stat.icon) ? (
            <div className={styles.stars}>
            {stat.icon.map((starIcon: StaticImageData, starIndex: number) => (
              <Image key={starIndex} src={starIcon} width={48} height={48} alt='Star' className='glassmorphism'/>
            ))}
          </div>
          ) : (
            <Image src={stat.icon} width={48} height={48} alt='' loading='lazy' className='glassmorphism'/>
          )}
          <h3><AnimatedCounter prefix={stat.prefix} suffix={stat.suffix} target={stat.stat} duration={1 + index * 0.7} characters={stat.characters}/>{stat.information}</h3>
        </article>
      ))
      }
    </section>
  )
}

export default TrustSection