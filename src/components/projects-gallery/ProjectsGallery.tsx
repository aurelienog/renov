import React from 'react';
import styles from './styles.module.css'
import { projects } from '../../data/projects';
import Image from 'next/image';

function ProjectsGallery() {
  return (
    <div className={`${styles.wrapper}`}>
      {projects.map((project, index) => (
        <Image src={project.image} key={index} alt='' style={{ width: '100%', height: 'auto', objectFit: 'cover'}}/>
      ))}
    </div>
  )
}

export default ProjectsGallery