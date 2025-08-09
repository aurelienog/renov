import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

function WhySection() {
  return (
    <section aria-labelledby='pourquoi-anj' className={`section ${styles.section}`}>
        <h2 id="pourquoi-anj">Mon engagement</h2>
        <p>ANJ RENOV, c{`'`}est le choix d{`'`}<span className='highlight'>un artisan investi</span>, proche de ses clients, et fier de chaque réalisation.</p>
        <Link href={'/#contact'} className="highlight">Vous avez un projet ? Parlons-en.</Link>
    </section>
  )
}

export default WhySection