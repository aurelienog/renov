'use client'
import { Project } from '@/lib/models/interfaces'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import ButtonTransparent from '../button-transparent/ButtonTransparent'

type Props = {
  project: Project | null
  open: boolean
  onClose: () => void
}

function ModalSlider({project, open, onClose}: Props) {
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

  if (!project) return null


  return (
    <dialog ref={dialogRef} className={styles.dialog} style={{ width: '90dvw', height: '95dvh'}}>
      <ButtonTransparent onClick={onClose}>X</ButtonTransparent>
      <Image src={project.image} alt={project.description} fill />
    </dialog>
  )
}

export default ModalSlider