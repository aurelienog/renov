'use client'
import React, { useCallback, useEffect, useState } from 'react';
import GalleryGrid from '@/components/projects-gallery/GalleryGrid';
import { Project } from '@/lib/models/interfaces';
import ModalSlider from '../modal-slider/ModalSlider';

type SelectedProjectState = {
  project: Project;
  index: number;
} | null;

function ProjectsGalleryWrapper({ projects }: { projects : Project[]}) {
  const [selectedState, setSelectedState] = useState<SelectedProjectState>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isOpen]);

  const handleItemClick = useCallback((project: Project) => {
    const index = projects.findIndex(p => p.image === project.image);
    if (index !== -1) {
      setSelectedState({ project, index });
      setIsOpen(true);
    }
  },[projects])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setSelectedState(null)
  }, [])

  const handlePrev = useCallback(() => {
  setSelectedState((prev) => {
    if (!prev) return null;
    const newIndex = (prev.index - 1 + projects.length) % projects.length;
    return {
      index: newIndex,
      project: projects[newIndex]
    };
  });
}, [projects]);

const handleNext = useCallback(() => {
  setSelectedState((prev) => {
    if (!prev) return null;
    const newIndex = (prev.index + 1) % projects.length;
    return {
      index: newIndex,
      project: projects[newIndex]
    };
  });
}, [projects]);

  return (
    <>
      <GalleryGrid projects={ projects } handleClick={handleItemClick}/>
      <ModalSlider project={selectedState?.project ?? null} open={isOpen} onClose={handleClose} onPrev={handlePrev} onNext={handleNext}/> 
    </>
  )
}

export default ProjectsGalleryWrapper