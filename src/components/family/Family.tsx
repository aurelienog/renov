'use client'
import React, { useRef } from 'react';
import styles from './styles.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import LettersReveal from '../letters-reveal/LettersReveal';

function Family() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: scrollRef,
      offset: ['start end', 'end end']
    })

    const maskScale = useTransform(scrollYProgress, [0, 1], ['1%', '700%'])

  return (
    <div ref={scrollRef} className='breakout' style={{height: '600dvh', position: 'relative', padding: '0 0 8rem 0'}}>
      <motion.section  className={` ${styles.section}`} style={{ maskSize: maskScale }}>
      </motion.section>
      <div style={{
        fontSize: '7rem',
        width: '60%',
        height: '100dvh',
        position: 'absolute',
        left: '48%',
        bottom: '-8rem'
      }}>
        <LettersReveal progress={scrollYProgress}/>
      </div>
    </div>

  )
}

export default Family