import React, { JSX } from 'react';
import styles from './styles.module.css';
import Link from "next/link";
import Button from '../button/Button';

function NavigationBar(): JSX.Element {
  return (
    <nav className={`${styles.navbar} `}>
      <ul>
        <li>
          <Link href={"/"}>Prestations</Link>
        </li>
        <li>
          <Link href={"/"}>Realisations</Link>
        </li>
        <li>
          <Link href={"/about"}>Mon parcours</Link>
        </li>
        <li>
          <Button>Devis gratuit</Button>
        </li>
      </ul>
    </nav>
  )
};

export default NavigationBar