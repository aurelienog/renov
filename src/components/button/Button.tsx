'use client'
import React, { JSX, ReactNode } from 'react';
import styles from './styles.module.css';

export interface ButtonProps {
  children: ReactNode,
  disabled: boolean,
  className: string
}

export default function Button({ children, disabled, className }: ButtonProps): JSX.Element {
  return (
    <button disabled={disabled} type='submit' className={`${styles.button} ${className}`}>{children}</button>
  )
}
