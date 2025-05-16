import React, { JSX, useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import Link from "next/link";
import Button from '../button/Button';
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';
import Image, { StaticImageData } from "next/image";

function NavigationBar({ containerRef, logo }: { logo: StaticImageData, containerRef: React.RefObject<HTMLElement | null> }): JSX.Element {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);

    const handleClick = () => {
      setOpen(prev => !prev);
    }
    const handleClickOutside = useCallback((e: PointerEvent) => {
      if (containerRef?.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }, [containerRef]);
  
    useEffect(() => {
      if (open) {
        document.addEventListener('pointerdown', handleClickOutside);
      } else {
        document.removeEventListener('pointerdown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('pointerdown', handleClickOutside);
      };
    }, [open, handleClickOutside]);
  
  

  return (
    <nav className={`${styles.navbar}`}>
      <Link href={"/"} onClick={() => setOpen(false)}> 
        <Image src={logo} alt='logo ANJ - home' placeholder='blur' quality={75} width={128} height={64} style={{ position: 'relative'}}/> 
      </Link>
      <HamburgerMenu handleClick = { handleClick } open={open}/>
      <ul ref={menuRef} id="main-navigation" className={`${styles.links} ${open ? styles.open : ''} header`}>
        <li onClick={() => setOpen(false)}>
          <Link href={"/prestations"}>Prestations</Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link href={"/realisations"}>Realisations</Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link href={"/about"}>À propos</Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Button>Devis gratuit</Button>
        </li>
      </ul>        
    </nav>
  )
};

export default NavigationBar