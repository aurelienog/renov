'use client'
import React from 'react';
import styles from './styles.module.css';
import { ButtonProps } from '@/models/interface';

export default function Button({children}: ButtonProps) {
  return (
    <button className={`${styles.button}`}>{children}</button>
  )
}
