'use client'
import React, { JSX, useCallback, useEffect, useRef, useState } from 'react';
import { ButtonProps } from '@/lib/models/types';
import Image from 'next/image';
import arrowUp from '../../../public/assets/icons/arrowUp.svg';
import styles from './styles.module.css';

function ScrollToTopButton( props: ButtonProps): JSX.Element | null {
const [isVisible, setIsVisible] = useState(false);
const footerIsInView = useRef(false);

const updateVisibility = useCallback(() => {
      const scrollY = window.scrollY;
      const passedMinScroll = scrollY > window.innerHeight * 1;
      const shouldShow = passedMinScroll &&  !footerIsInView.current;
      setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev))
    }, [])

useEffect(() => {

  const footerElement = document.querySelector('footer');
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        footerIsInView.current = entry.isIntersecting;
        updateVisibility();
      },
      { threshold: 0.01 }
    );

    observer.observe(footerElement);
    window.addEventListener('scroll', updateVisibility);
    updateVisibility(); // initial check

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateVisibility);
    };

}, [updateVisibility]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    if (!isVisible) return null;


  return (
    <button onClick={scrollToTop} {...props} aria-label="Scroll to top" className={`${styles.button} ${props.className ?? ''}`}>
      <Image src={arrowUp} alt='Flèche vers le haut' width={40} height={40}/>
    </button>
  )
}

export default ScrollToTopButton