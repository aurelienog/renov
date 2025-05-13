import React from 'react';
import HeaderServer from '@/components/header/HeaderServer';

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <HeaderServer />
      {children}
    </div>
  )
}

export default layout