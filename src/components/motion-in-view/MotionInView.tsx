'use client'
import React, { JSX } from 'react';
import { motion, Variants } from "framer-motion";

type Props = {
  children: React.ReactNode;
  variants: Variants,
  className?: string,
  once: boolean,
};



function MotionInView({ children, variants, className, once}: Props ): JSX.Element {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export default MotionInView