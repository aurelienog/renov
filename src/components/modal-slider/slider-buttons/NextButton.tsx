'use client'
import React from 'react';
import { ButtonProps } from '@/lib/models/types';
import styles from './styles.module.css';
import Image from 'next/image';
import nextIcon from '../../../../public/assets/icons/right.svg';

function NextButton( props : ButtonProps) {
  return (
    <button {...props} className={styles.button} aria-label="Réalisation suivante">
      <Image src={nextIcon} alt='' width={42} height={42}/>
    </button>
  )
}

export default NextButton