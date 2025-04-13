import Header from '@/components/header/Header';
import React from 'react';
import styles from './page.module.css';
import BackgroundImage from '@/components/background-image/BackgroundImage';

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.wrapper}>
    <Header />
    <BackgroundImage />
      {children}
    </div>
  )
}

export default layout