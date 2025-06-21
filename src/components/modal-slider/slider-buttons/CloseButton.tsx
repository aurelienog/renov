'use client'
import React from 'react';
import { ButtonProps } from '@/lib/models/types';
import styles from './styles.module.css';

function CloseButton( props : ButtonProps) {
  return (
    <button {...props} className={styles.button}/>
  )
}

export default CloseButton