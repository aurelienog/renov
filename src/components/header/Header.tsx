import React from 'react';
import Image from "next/image";
import Link from "next/link";
import NavigationBar from '../navigation-bar/NavigationBar';
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}> 
        <Image src='/assets/logo.png' alt='logo' width={144} height={30}/> 
      </Link>
      <NavigationBar/>
    </header>
  )
}

export default Header