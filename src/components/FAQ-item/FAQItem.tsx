'use client';
import { motion } from 'framer-motion';
import React, { JSX } from 'react';
import { FaqEntry } from '@/models/interfaces';
import styles from './styles.module.css';
import { fadeInUp } from '../../animations/variants'

function FAQItem({ entry }: { entry: FaqEntry }): JSX.Element  {
  const { question, answer } = entry;

  return (
    <motion.details 
    className={styles.details}
    variants={fadeInUp}
    >
      <summary>{question}</summary>
      <>{answer}</>
    </motion.details>
  );
}

export default FAQItem;