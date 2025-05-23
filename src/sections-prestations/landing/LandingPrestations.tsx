import React, { Suspense } from 'react';
import { detailedServices } from '../../data/data'
import { DetailedService } from '@/models/interfaces';
import GridServices from '@/components/grid-services/GridServices';
import Link from 'next/link';
import Loader from '../../app/prestations/loading';

function LandingPrestations() {
  return (
    <section className={`section`}>
      <h1>Mes Prestations</h1>
      <p>Chaque chantier est unique, mais le soin apporté reste le même. Voici un aperçu des prestations proposées, pensées pour répondre aux besoins les plus courants de mes clients.</p>
      <ul>
        <li><Link href={"#mur"}>Revêtements muraux</Link></li>
        <li><Link href={"#sol"}>Revêtements de sol</Link></li>
        <li><Link href={"#enduit"}>Enduits décoratifs & peintures à effet</Link></li>
        <li><Link href={"#boiserie"}>Rénovation de boiseries</Link></li>
        <li><Link href={"#autre"}>Travaux de rénovation diverse</Link></li>
        <li><Link href={"#peinture-exterieure"}>Peinture extérieure</Link></li>
        <li><Link href={"#peinture-interieure"}>Peinture intérieure</Link></li>
      </ul>
      <Suspense fallback={<Loader/>}>
        { detailedServices.map((service: DetailedService, index) => (
        <GridServices service={service} key={index}></GridServices>
      ))}
      </Suspense>

    </section>
  )
}

export default LandingPrestations