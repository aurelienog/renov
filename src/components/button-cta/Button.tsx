'use client'
import React, { JSX } from 'react';
import { ButtonProps } from '@/lib/models/types';

export default function Button( props: ButtonProps): JSX.Element {
  return (
    <button {...props} className={props.className? ` ${props.className} button` : `button`}/>
  )
}