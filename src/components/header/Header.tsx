import React, { JSX } from 'react';
import Image from "next/image";
import Link from "next/link";
import NavigationBar from '../navigation-bar/NavigationBar';
import styles from './styles.module.css';
import logo from '../../../public/assets/images/logo.webp';

function Header(): JSX.Element {
  return (
    <header className={`${styles.header} glassmorphism`}>
      <Link href={"/"}> 
        <Image src={logo} alt='logo ANJ - home' placeholder='blur' width={90} height={50}/> 
        <span>Renov</span>
      </Link>
      <NavigationBar/>
    </header>
  )
}

export default Header