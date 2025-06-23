'use client'
import React from 'react';
import { ButtonProps } from '@/lib/models/types';
import styles from './styles.module.css';
import Image from 'next/image';
import prevIcon from '../../../../public/assets/icons/left.svg';

function PrevButton( props: ButtonProps ) {
  return (
    <button {...props} className={styles.button} aria-label="Réalisation précédente">
      <Image src={prevIcon} alt='' width={42} height={42}/>
    </button>
  )
}

export default PrevButton