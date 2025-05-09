import React from 'react';
import BackgroundImage from '@/components/background-image/BackgroundImage';
import HeaderServer from '@/components/header/HeaderServer';
import heroImage from '../../../public/assets/images/hero.webp';

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <HeaderServer />
      <BackgroundImage image={heroImage}/>
      {children}
    </div>
  )
}

export default layout