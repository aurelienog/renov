'use client'
import React from 'react';
import styles from './styles.module.css';

function HamburgerMenu({handleClick}: { handleClick: () => void }) {

  return (
    <>
      <button
        className={`${styles.hamburger}`}
        aria-label="Toggle menu"
        onClick={handleClick}
      >
        ☰
      </button>
    </>
  )
}

export default HamburgerMenu