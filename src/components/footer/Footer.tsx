import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from 'next/image'

function Footer(): JSX.Element {
  return (
    <footer className={`${styles.footer}`}>
      <article>
        <Image src='/assets/logo.png' alt='logo' width={144} height={30}/> 
      </article>
      <article>
        <address>
        Siège social: <br/>
        6 rue Exemple <br/> 75000 Paris
        <br/>
        contact@renov.fr
        <br/>
        +33 01 00 00 00 00
        </address>
      </article>
      <article>
        Mentions legales
      </article>
      <article>
        <p>copyright 2025</p>
        <p>Mentions légales</p>
        <p>Tous droits réservés</p>
      </article>
    </footer>
  )
};

export default Footer