import React from 'react';
import { motion, MotionValue } from 'framer-motion';

function TimelineLine({ pathLength }: { pathLength: MotionValue }) {
  return (
    <svg viewBox="0 0 800 820" fill="none"  style={{  position: 'absolute', inset: '0', width: '100%', display: 'block', margin: 'auto'}}>
      <motion.path 
      style={{ pathLength }}
      d="M 0 129 Q 112 56 243 141 Q 390 248 509 168 Q 594 104 658 183 C 708 247 734 342 664 349 Q 544 362 510 460 C 473 559 347 434 250 428 C 157 423 124 469.5 103 548 " 
      strokeWidth="6"
      />
    </svg>
  )
}

export default TimelineLine