import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../../../public/assets/images/ANJ-logo-full.webp'

function Footer(): JSX.Element {
  return (
    <footer className={`${styles.footer}`}>
      <Link href={"/"}>
        <Image src={logo} alt='logo' quality={100} loading='lazy' width={300} height={150}/> 
      </Link>

      <article itemScope itemType="http://schema.org/Organization">
        <h2>Siège social:</h2>
        <p><span itemProp="name">Renov</span></p> 
        <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <span itemProp='streetAddress'>6 rue Exemple</span><br></br>
          <span itemProp="postalCode">75000</span>
          <span itemProp="addressLocality"> Paris</span> 
        </p>
        <address itemProp="contactPoint" itemScope itemType="http://schema.org/ContactPoint">
          <span itemProp="email">contact@renov.fr</span>
          <span itemProp="telephone">+33 1 00 00 00 00</span>  
        </address>
      </article>

      <article>
        <h2>Plan du site</h2>
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/prestations">Prestations</Link></li>
          <li><Link href="/realisations">Realisations</Link></li>
          <li><Link href="/about">À propos</Link></li>
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