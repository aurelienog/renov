import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from 'next/image'
import Link from 'next/link';

function Footer(): JSX.Element {
  return (
    <footer className={`${styles.footer}`}>
      <article>
        <Image src='/assets/logo.webp' alt='logo' width={250} height={140}/> 
      </article>
      <article>
        <h2>Siège social:</h2>
        <address>
          Renov <br/>
          6 rue Exemple <br/> 75000 Paris
          <br/>
          contact@renov.fr
          <br/>
          +33 01 00 00 00 00
        </address>
      </article>
      <article>
        <h2>Plan du site</h2>
        <ul>
          <li>Accueil</li>
          <li>Prestations</li>
          <li>Realisations</li>
          <li><Link href="/about">Mon parcours</Link></li>
          <li><Link href="/confidentiality">Politique de confidentialité</Link></li>
          <li><Link href="/legal">Mentions légales</Link></li>
          
        </ul>
      </article>
      <article>
        <p>© copyright 2025</p>
        <p>Tous droits réservés</p>
      </article>
    </footer>
  )
};

export default Footer