'use client'
import React from 'react';
import { ButtonProps } from '@/lib/models/types';
import styles from './styles.module.css';
import Image from 'next/image';
import closeIcon from '../../../../public/assets/icons/close.svg';

function CloseButton( props : ButtonProps) {
  return (
    <button {...props} className={styles.button} aria-label="Fermer le carrousel">
      <Image src={closeIcon} alt='' width={32} height={32}/>
    </button>
  )
}

export default CloseButton