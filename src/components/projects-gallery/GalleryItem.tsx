import { Project } from '@/lib/models/interfaces'
import Image from 'next/image'
import React from 'react'

function GalleryItem({project}: {project: Project}) {
  return (
    <li>
      <Image src={project.image} alt={project.description} sizes='(max-width: 970px) 100vw, (max-width: 1400px) 50vw, 33vw"'  placeholder='blur' style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '1rem'}}/>
    </li>
  )
}

export default GalleryItem