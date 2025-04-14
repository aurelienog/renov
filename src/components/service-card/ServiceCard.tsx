import Image, { StaticImageData } from 'next/image';
import React, { JSX } from 'react';
import styles from "./styles.module.css";
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  image: StaticImageData;  // Asegúrate de que la imagen tenga este tipo
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }): JSX.Element  => {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <Image src={image} placeholder='blur' alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{
        borderRadius:'var(--border-radius)',
        objectFit: 'cover', zIndex: '-1',
      }}/>
      <p>description blablabla</p>
      <Link href={'/'}>Plus de details <span className='visually-hidden'>concernant mes prestations {title}</span></Link>
    </article>
  );
};

export default ServiceCard;