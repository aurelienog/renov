'use client'

import React, { JSX, useRef, useState } from 'react';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import NavigationBar from '../navigation-bar/NavigationBar';
import styles from './styles.module.css';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

function Header({ logo }: { logo: StaticImageData }): JSX.Element {
  const [ isHidden, setIsHidden ] = useState(false);
  const { scrollY }  = useScroll();
  const lastYRef = useRef(0);
  const ticking = useRef(false);

  useMotionValueEvent(scrollY, 'change', (currentY) => {
    if (!ticking.current) {
      ticking.current = true;

      //raf necessary to only respond once per frame (60fps max) 
      window.requestAnimationFrame(() => {
        const delta = currentY - lastYRef.current;

        if (Math.abs(delta) > 10) {
          const nextHidden = delta > 0;

          //set a new state only if it's different from the current state
          if (nextHidden !== isHidden) {
            setIsHidden(nextHidden);
          }
        }

    lastYRef.current = currentY;
    ticking.current = false;
      })
    }
  })

  return (
    <motion.header 
    className={`${styles.header}`}
    role='banner'
    animate= { isHidden ? "hidden" : "visible" }
    whileHover="visible"
    onFocusCapture={() => setIsHidden(false)}
    variants={{
      hidden : {
        y: "-100%",
      },
      visible: {
        y: "0%"
      }
    }}
    transition={{ duration: 0.2}}
    >

      <Link href={"/"}> 
        <Image src={logo} alt='logo ANJ - home' width={120} height={60}/> 
      </Link>
      <NavigationBar/>
    </motion.header>
  )
}

export default Header