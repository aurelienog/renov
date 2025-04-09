import React from 'react';
import Image from "next/image";
import Link from "next/link";
import NavigationBar from '../navigation-bar/NavigationBar';
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}> 
        <Image src='/assets/logo.webp' alt='logo' width={170} height={100}/> 
      </Link>
      <NavigationBar/>
    </header>
  )
}

export default Header