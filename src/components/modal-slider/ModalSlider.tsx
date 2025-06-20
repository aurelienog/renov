'use client'
import { Project } from '@/lib/models/interfaces'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'

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
      if (!dialog.open) dialog.showModal()
    } else {
      if (dialog.open) dialog.close()
    }

    const handleClose = () => onClose()
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [open, project, onClose])

  if (!project) return null


  return (
    <dialog ref={dialogRef} className={styles.dialog} style={{ width: '90vw', height: '95vh'}}>
      <Image src={project.image} alt='' fill />
    </dialog>
  )
}

export default ModalSlider