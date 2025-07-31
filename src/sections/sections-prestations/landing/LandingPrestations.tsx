import React, { Suspense } from 'react';
import { detailedServices } from '@/data/data';
import { DetailedService } from '@/lib/models/interfaces';
import GridServices from '@/components/services-list/ServicesList';
import Loader from '@/app/prestations/loading';
import styles from '@/sections/sections-prestations/landing/styles.module.css';

function LandingPrestations() {
  return (
    <section aria-labelledby='prestations-accueil' className={`breakout ${styles.section}`}>
      <h1 id="prestations-accueil">Mes Prestations</h1>
      <p>Chaque chantier est unique, mais le soin apporté reste le même.</p>
      <p>Voici un aperçu des prestations proposées, pensées pour répondre aux besoins les plus courants de mes clients.</p>
      <Suspense fallback={<Loader/>}>
        { detailedServices.map((service: DetailedService, index) => (
        <GridServices service={service} key={index} index={index}></GridServices>
      ))}
      </Suspense>
    </section>
  )
}

export default LandingPrestations