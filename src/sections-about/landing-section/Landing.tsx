import React, { JSX } from 'react';
import Family from '@/components/family/Family';
import teamImage from '../../../public/assets/images/portrait.webp';


function Landing(): JSX.Element {
  return (
    <section className='full-width' style={{position: 'relative', paddingBottom: '4rem' }}>
      <Family image={teamImage}/>
    </section>
  )
}

export default Landing