import React from 'react';
import styles from './styles.module.css'
import { projects } from '../../data/projects';
import Image from 'next/image';

function ProjectsGallery() {
  return (
    <div className={`${styles.wrapper}`}>
      {projects.map((project, index) => (
        <Image src={project.image} key={index} alt={project.description} sizes='(max-width: 970px) 100vw, (max-width: 1400px) 50vw, 33vw"'  placeholder='blur' style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '1rem'}}/>
      ))}
    </div>
  )
}

export default ProjectsGallery