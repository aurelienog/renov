'use client'
import React, { useCallback, useEffect, useState } from 'react';
import GalleryGrid from '@/components/projects-gallery/GalleryGrid';
import { Project } from '@/lib/models/interfaces';
import ModalSlider from '../modal-slider/ModalSlider';


function ProjectsGalleryWrapper({ projects }: { projects : Project[]}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  return () => {
    document.body.style.overflow = 'visible';
  };
}, [isOpen]);

  const handleItemClick = useCallback((project: Project) => {
    setSelectedProject(project)
    setIsOpen(true)
  },[])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setSelectedProject(null)
  }, [])

  return (
    <>
      <GalleryGrid projects={ projects } handleClick={handleItemClick}/>
      <ModalSlider project={selectedProject} open={isOpen} onClose={handleClose} /> 
    </>
  )
}

export default ProjectsGalleryWrapper