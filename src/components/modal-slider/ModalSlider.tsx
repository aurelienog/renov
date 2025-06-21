'use client'
import { Project } from '@/lib/models/interfaces'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import CloseButton from './slider-buttons/CloseButton'
import PrevButton from './slider-buttons/PrevButton'
import NextButton from './slider-buttons/NextButton'

type Props = {
  project: Project | null
  open: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function ModalSlider({project, open, onClose, onPrev, onNext}: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)


  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && project) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) dialog.close();
    }

    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose)
  }, [open, project, onClose])

    const handlePrev = () => {
      onPrev()
    }

    const handleNext = () => {
      onNext()
    }
  if (!project) return null


  return (
    <dialog ref={dialogRef} className={styles.dialog} style={{ width: '90dvw', height: '95dvh'}}>
      <CloseButton onClick={onClose}>X</CloseButton>
      <Image src={project.image} alt={project.description} fill />
      <PrevButton onClick={handlePrev}>{'<'}</PrevButton>
      <NextButton onClick={handleNext}>{'>'}</NextButton>
    </dialog>
  )
}

export default ModalSlider