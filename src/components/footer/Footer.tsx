import React, { JSX } from 'react';
import styles from './styles.module.css';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../../../public/assets/images/ANJ-logo-full.webp'

function Footer(): JSX.Element {
  return (
    <footer className={`${styles.footer}`}>
      <Link href={"/"}>
        <Image src={logo} alt='logo ANJ RENOV- home' quality={75} width={300} height={150}/> 
      </Link>

      <article itemScope itemType="http://schema.org/Organization">
        <h2>Siège social:</h2>
        <p><span itemProp="name">A.N.J. RENOV</span></p> 
        <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <span itemProp='streetAddress'>99 Boulevard de la Reine</span><br></br>
          <span itemProp="postalCode">78000</span>
          <span itemProp="addressLocality"> Versailles</span> 
        </p>
        <address itemProp="contactPoint" itemScope itemType="http://schema.org/ContactPoint">
          <span itemProp="email">contact@anj-renov.fr</span>
          <span itemProp="telephone">+33 1 00 00 00 00</span>  
        </address>
      </article>

      <article>
        <h2>Plan du site</h2>
        <ul>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/prestations">Prestations</Link></li>
          <li><Link href="/realisations">Realisations</Link></li>
          <li><Link href="/a-propos">À propos</Link></li>
          <li><Link href="/politique-de-confidentialite">Politique de confidentialité</Link></li>
          <li><Link href="/mentions-legales">Mentions légales</Link></li>   
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