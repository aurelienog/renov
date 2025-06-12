import React, { JSX } from 'react';
import styles from './styles.module.css';

const letters = [
  { char: 'A', className: 'a' },
  { char: 'N', className: 'n' },
  { char: 'J', className: 'j'},
];


function LettersReveal(): JSX.Element {

  return (
    <div className={styles.wrapper}>       
      { letters.map((letter, index:number) => (
        <h2 
        key={index} 
        className={`${styles[letter.className]} ${styles[`delay${index}`]}  `}
        >{letter.char}</h2>
      ))}
    </div>
  )
}

export default LettersReveal

