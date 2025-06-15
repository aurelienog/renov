import React, { JSX } from 'react';
import styles from './styles.module.css';

function BenefitsSection(): JSX.Element {
  return (
    <section className={`section ${styles.section}`}>
      <h2>Ce qui fait ma différence</h2>
      <ul>
          <li>Un héritage familial solide et authentique</li>
          <li>Une relation de confiance avec mes clients</li>
          <li>Un soin du détail cultivé depuis toujours</li>
          <li>Une passion pour le métier, intacte à chaque nouveau projet</li>
      </ul>
    </section>
  )
}

export default BenefitsSection