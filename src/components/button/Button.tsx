'use client'
import React, { JSX } from 'react';
import styles from './styles.module.css';
import { ButtonProps } from '@/models/interfaces';

export default function Button({children}: ButtonProps): JSX.Element {
  return (
    <button className={`${styles.button}`}>{children}</button>
  )
}
