'use client'
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './styles.module.css';
import Image from 'next/image';
import filterIcon from '../../../public/assets/icons/filter.svg';

function GalleryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
    const selectedValue = searchParams.get('service') ?? ''

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    const value = e.target.value;

    if (value) params.set('service', value);
    else params.delete('service');

    router.push(`/realisations?${params.toString()}`);
  }

  return (
    <form aria-label="Filtrer les photos" className={styles.filter}>
        <label htmlFor="service-select"> <Image src={filterIcon}  width={24} alt='filtre'/> Catégorie : </label>
        <select id="service-select" value={selectedValue} onChange={handleChange}>
          <option value="">Toutes les prestations</option> 
        <option value="boiserie">Rénovation de boiseries</option> 
        <option value="sol">Revêtements de sols</option> 
        <option value="mur">Revêtements muraux</option> 
        <option value="exterieur">Peinture extérieure</option> 
        <option value="interieur">Peinture intérieure</option> 
        <option value="enduit">Enduits décoratifs & peintures à effet</option> 
        <option value="autre">Rénovations diverses</option> 
        </select>
    </form>
  )
}

export default GalleryFilter