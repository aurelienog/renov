import React, { JSX, useState } from 'react';
import styles from './styles.module.css';
import { motion, MotionValue, useMotionValueEvent } from 'framer-motion';

const letters = [
  { char: 'A', className: 'a' },
  { char: 'N', className: 'n' },
  { char: 'J', className: 'j'},
];


function LettersReveal({ progress }: {progress: MotionValue}): JSX.Element {
  const [revealed, setRevealed] = useState(Array(letters.length).fill(false));
  const [active, setActive] = useState(false);

  useMotionValueEvent(progress, 'change', (value) => {
    const trigger = value > 0.70;
    setActive(trigger);
    if (!trigger) setRevealed(Array(letters.length).fill(false)); //porque esa linea?
  });

  const markAsRevealed = (index: number) => {
    if (active) {
      setRevealed((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
    }
  };

  return (
    <div className={styles.wrapper}> 
      <motion.h1 className={styles.title}
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0}}
              transition={{ duration: 0.6, ease: 'linear' }}
      >Une histoire de famille 
      </motion.h1>
      
      { letters.map((letter, index:number) => (
        <motion.h2 
        key={index} 
        className={`${styles[letter.className]} ${styles[`delay${index}`]} ${active && revealed[index] ? styles.active : ''} `}
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0}}
        transition={{ delay: index * 0.2, duration: 0.6, ease: 'linear' }}
          onAnimationComplete={() => markAsRevealed(index)}
          aria-hidden
        >{letter.char}</motion.h2>
      ))}
    </div>
  )
}

export default LettersReveal