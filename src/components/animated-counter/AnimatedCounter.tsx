'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, animate, useInView } from 'framer-motion';

type AnimatedCounterProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // en segundos
  inViewDelay?: number; // en milisegundos
  character?: number;
};

const AnimatedCounter = ({
  target,
  prefix = '',
  suffix = '',
  duration = 1,
  inViewDelay = 0,
  character = 3,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState('0');

  const startAnimation = useCallback(() => {
    const controls = animate(motionValue, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toString());
      },
    });

    return () => controls.stop();
  }, [motionValue, target, duration]);

  useEffect(() => {
    if (!isInView) return;

    const timeoutId = setTimeout(() => {
      const stopAnimation = startAnimation();
      return () => stopAnimation?.();
    }, inViewDelay);

    return () => clearTimeout(timeoutId);
  }, [isInView, inViewDelay, startAnimation]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: inViewDelay / 1000 }}
      aria-live="polite"
      role="status"
      style={{ display: 'inline-block', minWidth: `${character}ch` }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
