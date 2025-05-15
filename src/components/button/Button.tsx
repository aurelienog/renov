'use client'
import React, { JSX, ReactNode } from 'react';
import styles from './styles.module.css';

export interface ButtonProps {
  children: ReactNode
}

export default function Button({children}: ButtonProps): JSX.Element {
  return (
    <button className={`${styles.button}`}>{children}</button>
  )
}
