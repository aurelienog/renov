import React, { JSX } from 'react';
import styles from './styles.module.css';
import Link from "next/link";

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
      </ul>
    </nav>
  )
};

export default NavigationBar