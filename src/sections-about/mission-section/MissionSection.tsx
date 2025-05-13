import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import furgo from '../../../public/assets/images/furgo.webp';

function MissionSection(): JSX.Element {
  return (
    <section className={`full-width base-layout section ${styles.section}`}>
      <article>
        <h2>Ma mission : rénover vos intérieurs</h2>
        <p>Aujourd’hui, j’interviens principalement <span className='highlight'>dans les Yvelines et le Val d’Oise</span> pour tous vos projets de peinture et rénovation. De la préparation des supports à la finition décorative, je m’engage personnellement sur chaque chantier pour vous garantir un résultat durable et soigné.</p>
      </article>
      <figure>
        <Image src={furgo} alt='' fill placeholder='blur' style={{objectFit: 'cover'}} />
      </figure>
    </section>
  )
}

export default MissionSection