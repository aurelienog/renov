'use client'
import React, { JSX, useRef } from 'react';
import styles from './styles.module.css';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import LettersReveal from '../letters-reveal/LettersReveal';
import Image, { StaticImageData } from 'next/image';

function Family({ image }: { image: StaticImageData}): JSX.Element {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: scrollRef,
      offset: ['start end', 'end end']
    })

    const maskScale = useTransform(scrollYProgress, [0, 1], ['1%', '500%']);

    const opacityRaw = useTransform(scrollYProgress, [0.7, 0.72], [0, 1]);
    const opacity = useSpring(opacityRaw, { stiffness: 100, damping: 20 });

  return (
    <section ref={scrollRef} className='full-width' style={{height: '600vh', position: 'relative'}}>
      <motion.figure  className={` ${styles.figure}`} style={{ maskSize: maskScale }}>
        <Image src={image} placeholder='blur' priority sizes='100vw' quality={75} style={{ objectFit: 'cover',  width: '100%', height: '100vh'  }} alt={`Portrait d'Antonio et Julien`}/>
      </motion.figure>
      <motion.div className={styles.wrapper} style={{
        fontSize: '7rem',
        width: '50%',
        height: '100vh',
        top: '0',
        position: 'sticky',
        left: '50%',
        bottom: 0,
        backgroundColor: 'var(--background)',
        opacity
      }}>
        <LettersReveal progress={scrollYProgress}/>
      </motion.div>
    </section>

  )
}

export default Family