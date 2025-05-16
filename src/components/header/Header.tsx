'use client'

import React, { JSX, useRef, useState } from 'react';

import NavigationBar from '../navigation-bar/NavigationBar';
import styles from './styles.module.css';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { StaticImageData } from 'next/image';

function Header({ logo }: { logo: StaticImageData }): JSX.Element {
  // ref to detect click outside the header and close the menu if open
  const headerRef = useRef<HTMLElement>(null);

  //hide header on scroll down
  const [ isHidden, setIsHidden ] = useState(false);
  const { scrollY }  = useScroll();
  const lastYRef = useRef(0);
  const ticking = useRef(false);

  useMotionValueEvent(scrollY, 'change', (currentY) => {
    if (!ticking.current) {
      ticking.current = true;

      //raf necessary to only respond once per frame (60fps max) 
      window.requestAnimationFrame(() => {
      
      // 🔁always show header if scroll at top
      if (currentY <= 0) {
        setIsHidden(false);
        lastYRef.current = 0;
        ticking.current = false;
      } else { 
        const delta = currentY - lastYRef.current;

        if (Math.abs(delta) > 10) {
          const nextHidden = delta > 0;

          //set a new state only if it's different from the current state
          if (nextHidden !== isHidden) {
            setIsHidden(nextHidden);
          }
        }
      }
    lastYRef.current = currentY;
    ticking.current = false;
      });
    }
  });
  
  return (
    <motion.header
    className={`${styles.header}`}
    role='banner'
    animate= { isHidden  ? "hidden" : "visible" }
    whileHover="visible"
    onClick={() => {// open the header if touched on mobile
      setIsHidden(false);
    }} 
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
    ref={headerRef}
    >
      <NavigationBar containerRef={headerRef} logo={logo}/>
    </motion.header>
  )
}

export default Header