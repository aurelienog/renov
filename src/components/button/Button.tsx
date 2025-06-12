'use client'
import React, { JSX } from 'react';
import styles from './styles.module.css';
import { ButtonProps } from '@/lib/models/types';

export default function Button( props: ButtonProps): JSX.Element {
  return (
    <button {...props} className={props.className? `${styles.button} ${props.className}` : `${styles.button}`}/>
  )
}
