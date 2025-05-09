'use client'
import React from 'react';
import styles from './styles.module.css';

function HamburgerMenu({handleClick, open}: { handleClick: () => void , open : boolean}) {

  return (
    <>
      <button
        className={`${styles.hamburger}`}
        aria-controls="main-navigation"
        aria-expanded={open}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}      
        onClick={handleClick}
      >
        ☰
      </button>
    </>
  )
}

export default HamburgerMenu