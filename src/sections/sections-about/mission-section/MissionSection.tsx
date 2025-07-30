import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import furgo from '../../../../public/assets/images/furgo.webp';

function MissionSection(): JSX.Element {
  return (
    <section aria-labelledby='our-mission' className={`full-width base-layout section ${styles.section}`}>
      <article>
        <h2 id="our-mission" >Un ancrage local</h2>
        <p>J{"'"}interviens principalement <span className='highlight'>dans les Yvelines et le Val d{"'"}Oise</span> pour tous vos projets de peinture et rénovation.</p>
        <p>De la préparation des supports à la finition décorative, je m{"'"}engage personnellement sur chaque chantier pour vous garantir un résultat durable et soigné.</p>
      </article>
      <figure>
        <Image src={furgo} alt='' fill placeholder='blur' style={{objectFit: 'cover'}} />
      </figure>
    </section>
  )
}

export default MissionSection