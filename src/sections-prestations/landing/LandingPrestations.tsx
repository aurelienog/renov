import React, { Suspense } from 'react';
import { detailedServices } from '../../data/data'
import { DetailedService } from '@/lib/models/interfaces';
import GridServices from '@/components/services-list/ServicesList';
// import Link from 'next/link';
import Loader from '../../app/prestations/loading';
import styles from './styles.module.css';

function LandingPrestations() {
  return (
    <section className={`breakout ${styles.section}`}>
      <h1>Mes Prestations</h1>
      <p>Chaque chantier est unique, mais le soin apporté reste le même.</p>
      <p>Voici un aperçu des prestations proposées, pensées pour répondre aux besoins les plus courants de mes clients.</p>
      <Suspense fallback={<Loader/>}>
        { detailedServices.map((service: DetailedService, index) => (
        <GridServices service={service} key={index}></GridServices>
      ))}
      </Suspense>

    </section>
  )
}

export default LandingPrestations