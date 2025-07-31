import React, { JSX } from 'react';
import styles from '@/sections/sections-home/trust-section/styles.module.css'
import Image, { StaticImageData } from 'next/image';
import AnimatedCounter from '@/components/animated-counter/AnimatedCounter';
import { TrustStatistic } from '@/lib/models/interfaces';
import { statistics } from '@/data/data';

function TrustSection(): JSX.Element {

  return (
    <section aria-labelledby='confiance' className={`full-width ${styles.section}`}>
      <h2 id="confiance" className='visually-hidden'>Chiffres clés</h2>
      {statistics.map((stat: TrustStatistic, index: number) => (
        <article key={index} className={styles.article}>
          {Array.isArray(stat.icon) ? (
            <div className={styles.stars}>
            {stat.icon.map((starIcon: StaticImageData, starIndex: number) => (
              <Image key={starIndex} src={starIcon} width={48} height={48} alt='Star' className='glassmorphism' aria-hidden="true"/>
            ))}
          </div>
          ) : (
            <Image src={stat.icon} width={48} height={48} alt='' loading='lazy' className='glassmorphism' aria-hidden="true"/>
          )}
          <h3 aria-hidden="true"><AnimatedCounter prefix={stat?.prefix} suffix={stat?.suffix} target={stat?.stat} duration={0.5 + index * 0.7} characters={stat?.characters}/>{stat?.information}</h3>
          <p className='visually-hidden'><span>{stat?.prefix}{stat?.stat}{stat?.suffix}</span> {stat?.information}</p>
        </article>
      ))
      }
    </section>
  )
}

export default TrustSection