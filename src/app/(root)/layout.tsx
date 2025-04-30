import React from 'react';
import styles from './page.module.css';
import BackgroundImage from '@/components/background-image/BackgroundImage';
import HeaderServer from '@/components/header/HeaderServer';

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.wrapper}>
      <HeaderServer />
      <BackgroundImage />
      {children}
    </div>
  )
}

export default layout