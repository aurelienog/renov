import React, { JSX } from 'react';
import styles from './styles.module.css';

function MissionSection(): JSX.Element {
  return (
    <section className={`full-width base-layout section ${styles.section}`}>
      <h2>Ma mission : sublimer vos intérieurs et extérieurs</h2>
      <p>Aujourd’hui, j’interviens <span className='highlight'>dans les Yvelines et le Val d’Oise</span> pour tous vos projets de peinture et rénovation. De la préparation des supports à la finition décorative, je m’engage personnellement sur chaque chantier pour vous garantir un résultat durable et soigné.</p>
    </section>
  )
}

export default MissionSection