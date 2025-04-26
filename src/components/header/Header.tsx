import React, { JSX } from 'react';
import Image from "next/image";
import Link from "next/link";
import NavigationBar from '../navigation-bar/NavigationBar';
import styles from './styles.module.css';
import logo from '../../../public/assets/images/ANJ-logo-full.webp';

function Header(): JSX.Element {
  return (
    <header className={`${styles.header} glassmorphism`}>
      <Link href={"/"}> 
        <Image src={logo} alt='logo ANJ - home' placeholder='blur' width={120} height={60}/> 
      </Link>
      <NavigationBar/>
    </header>
  )
}

export default Header