import React from 'react';
import { detailedServices } from '../../data/data'
import { DetailedService } from '@/models/interfaces';
import GridServices from '@/components/grid-services/GridServices';

function LandingPrestations() {
  return (
    <section className={`section`}>
      <h1>Mes Prestations</h1>
      <p>Chaque chantier est unique, mais le soin apporté reste le même. Voici un aperçu des prestations proposées, pensées pour répondre aux besoins les plus courants de mes clients.</p>
      { detailedServices.map((service: DetailedService, index) => (
        <GridServices service={service} key={index}></GridServices>
      ))}
    </section>
  )
}

export default LandingPrestations