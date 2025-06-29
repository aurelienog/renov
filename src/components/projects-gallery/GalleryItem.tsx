'use client'
import { Project } from '@/lib/models/interfaces'
import Image from 'next/image'
import React from 'react'

function GalleryItem({project, handleClick}: { project: Project, handleClick: (p: Project) => void }) {

    const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick(project)
    }
  }
  
  return (
    <li>
      <Image src={project.image} alt={project.description} onClick={() => (handleClick(project))} onKeyDown={handleKeyDown} tabIndex={0} role="button" aria-label={`Ouvrir la photo dans le carrousel`} sizes='(max-width: 970px) 100vw, (max-width: 1400px) 50vw, 33vw"'  placeholder='blur' style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '1rem'}}/>
    </li>
  )
}

export default GalleryItem