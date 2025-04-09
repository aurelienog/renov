import React, { JSX } from 'react';
import styles from './styles.module.css';
import Link from "next/link";

function NavigationBar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_ul}>
        <li>
          <Link href={"/"} className={styles.navbar_link}>Accueil</Link>
        </li>
        <li>
          <Link href={"/"} className={styles.navbar_link}>Prestations</Link>
        </li>
        <li>
          <Link href={"/"} className={styles.navbar_link}>Realisations</Link>
        </li>
        <li>
          <Link href={"/"} className={styles.navbar_link}>A propos</Link>
        </li>
        <li>
          <Link href={"/"} className={styles.navbar_link}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
};

export default NavigationBar