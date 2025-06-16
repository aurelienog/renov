import { Project } from '@/lib/models/interfaces'
import Image from 'next/image'
import React from 'react'

function ModalSlider({project}: {project: Project}) {
  return (
    <dialog style={{ width: '90%', height: '90%'}}>
      <Image src={project.image} alt='' fill/>
    </dialog>
  )
}

export default ModalSlider