'use client';
import React, { useEffect, useState, useRef } from 'react';
import { useSpring, useInView } from 'framer-motion';

type AnimatedCounterProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  }

function AnimatedCounter({ target, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const spring = useSpring(0, { 
    bounce: 0, 
    damping: 100, 
    stiffness: 500} 
  );
  const [value, setValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    spring.set(target);

    const cleanup = spring.on('change', (val) => {
      setValue(Math.round(val).toString());
    });

    return () => cleanup();
  }, [isInView, target, spring]);

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
};

export default AnimatedCounter;