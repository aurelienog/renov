import React, { JSX } from 'react';
import Image from "next/image";
import Link from "next/link";
import NavigationBar from '../navigation-bar/NavigationBar';
import styles from './styles.module.css';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link href={"/"}> 
        <Image src='/assets/logo.webp' alt='logo' width={90} height={50}/> 
      </Link>
      <NavigationBar/>
    </header>
  )
}

export default Header