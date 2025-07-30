import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import userCheck from '@/../public/assets/icons/user-check.svg';
import sparkles from '@/../public/assets/icons/sparkles.svg';
import ruler from '@/../public/assets/icons/ruler.svg';
import palette from '@/../public/assets/icons/palette.svg';

function BenefitsSection(): JSX.Element {
  return (
    <section aria-labelledby='why-us' className={`section breakout ${styles.section}`}>
      <h2 id="why-us">Ce qui me distingue</h2>
      <ul>
          <li>
            <Image src={userCheck} alt='' width={44} height={44}/>
            <h3>Un interlocuteur unique</h3>
            <p>Un seul contact, du devis aux finitions. Clarté et fiabilité garanties.</p>
          </li>
          <li>
            <Image src={palette} alt='' width={44} height={44}/>
            <h3>Un savoir-faire polyvalent</h3>
            <p>Intérieur, extérieur, murs, boiseries... Je maîtrise une large palette de compétences.</p>
          </li>
          <li>
            <Image src={ruler} alt='' width={44} height={44}/>
            <h3>Une approche sur mesure</h3>
            <p>Je m{`'`}adapte à vos contraintes, vos envies et votre rythme.</p>
          </li>
          <li>
            <Image src={sparkles} alt='' width={44} height={44}/>
            <h3>Un travail soigné</h3>
            <p> Chantier protégé, espace rangé, finitions précises : chaque détail compte.</p>
            </li>
      </ul>
    </section>
  )
}

export default BenefitsSection