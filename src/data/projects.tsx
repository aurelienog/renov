
import { Project } from '@/lib/models/interfaces';
import bois from '../../public/assets/images/projects/bois.webp'
import mur from '../../public/assets/images/projects/bois.webp'
import sol from '../../public/assets/images/projects/bois.webp'

export const projects: Project[] = [
  {
    image: sol,
    service: 'sol',
  }, {
    image: mur,
    service: 'mur',
  }, {
    image: bois,
    service: 'boiserie',
  },
]