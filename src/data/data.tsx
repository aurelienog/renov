
import { FaqEntry, Column, WorkStep, Service, BeforeAfterComparison } from '@/models/interfaces';
import Image, { StaticImageData } from 'next/image';

//services images
import autre from '../../public/assets/autre.jpg';
import revetement from '../../public/assets/revetement.jpg';
import interieur from '../../public/assets/interieur.jpg';
import parquet from '../../public/assets/parquet.jpg';
import preparation from '../../public/assets/preparation.jpg';
import bois from '../../public/assets/bois.jpg';
import enduit from '../../public/assets/enduit.jpg';
import exterieur from '../../public/assets/exterieur.jpg';

//last projects images 
import transparentImage from '../../public/assets/transparentImage.png';
import wood from '../../public/assets/images/wood.webp';
import bedroom from '../../public/assets/images/bedroomAfter.webp';
import indoor from '../../public/assets/images/indoor.webp';

//timeline icons
import phone from '../../public/assets/icons/phone.svg';
import location from '../../public/assets/icons/location.svg';
import calendar from '../../public/assets/icons/calendar.svg';
import search from  '../../public/assets/icons/search.svg';
import paintRoll from '../../public/assets/icons/paint-roll.svg';
import clipboard from '../../public/assets/icons/clipboard.svg';
import donate  from '../../public/assets/icons/donate.svg';

//FAQ icons
import check from '../../public/assets/icons/check.svg';
import warning from '../../public/assets/icons/warning.svg';
import x from '../../public/assets/icons/x.svg';

//Before-after images
import beforeBathroom from '../../public/assets/images/beforeBathroom.webp';
import afterBathroom from '../../public/assets/images/afterBathroom.webp';
import beforeLiving from '../../public/assets/images/livingBefore.webp';
import afterliving from '../../public/assets/images/livingAfter.webp';
import bedroomBefore from '../../public/assets/images/bedroomBefore.webp';
import bedroomAfter from '../../public/assets/images/bedroomAfter.webp';

/* Update const columns to modify the comparison chart.
The first {} defines the criteria, the following {} are the elements to compare.
Each key is a line */

export const columns: Column[] = [{
  title: '',
  one: 'Expérience',
  two: 'Qualité des finitions',
  three: 'Accompagnement & conseils',
  four: 'Devis et transparence',
  five: 'Flexibilité & relation client',
  six: 'Matériaux utilisés',
  seven: 'Respect des délais',
  eight: 'Suivi après travaux'
  }, {
  title: 'Votre auto-entrepreneur',
  one: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>+ de 10 ans d’expérience</span>
  </>,
  two: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Travail soigné et sur-mesure</span>
  </>,
  three: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Conseils personnalisés (couleurs, finitions)</span>
  </>,
  four: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Devis clair, sans surprise</span>
  </>,
  five: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Relation directe, à l’écoute</span>
  </>,
  six: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Peintures de qualité pro</span>
  </>,
  seven: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Engagement respecté</span>
  </>,
  eight: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Garantie et retouches si besoin</span>
  </>,
}, {
  title: 'Grande entreprise',
  one: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Variable selon les employés</span>
  </>,
  two: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Standardisé, dépend des équipes</span>
  </>,
  three: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Souvent impersonnel</span>
  </>,
  four: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Frais cachés possibles</span>
  </>, 
  five: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Délais longs, peu de personnalisation</span>
  </>,
  six: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Qualité variable selon le contrat</span>
  </>,
  seven: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Dépend du planning chargé</span>
  </>, 
  eight: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Service après-vente variable</span>
  </>, 
}, {
  title: 'Peintre Low-Cost',
  one: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Manque d’expérience</span>
  </>,
  two: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Peuvent être bâclées pour gagner du temps</span>
  </>,
  three: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Peu ou pas de conseils</span>
  </>, 
  four: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Tarifs très bas mais qualité incertaine</span>
  </>,
  five: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Flexible mais parfois peu fiable</span>
  </>,
  six: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Produits souvent bas de gamme</span>
  </>,
  seven: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Souvent des retards</span>
  </>, 
  eight: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Pas de suivi</span>
  </>, 
}];

export const faqEntries: FaqEntry[] = [{
  question: "Quels types de travaux de peinture proposez-vous ?",
  answer: (<>
    <p>Nous réalisons la peinture intérieure et extérieure pour les maisons, appartements et locaux professionnels. Cela inclut :</p>
    <ul>
      <li>Peinture des murs et plafonds</li>
      <li>Peinture décorative (effets, patines)</li>
      <li>Rafraîchissement ou rénovation complète</li>
      <li>Peinture des façades, volets et portails</li>
    </ul>
  </>)
}, {
  question: "Comment choisir la bonne couleur pour mon intérieur ?",
  answer: <p>Le choix des couleurs dépend de plusieurs facteurs : la luminosité, la taille de la pièce et votre style. Nous vous conseillons gratuitement sur les harmonies de teintes et les finitions adaptées.</p>,
}, {
  question: "Dois-je préparer mon logement avant les travaux ?",
  answer: <>
    <p>Nous nous occupons de tout ! Cependant, il est recommandé de :</p>
    <ul>
      <li>Déplacer les objets fragiles et petits meubles</li>
      <li>Retirer les rideaux et cadres si possible</li>
      <li>Nous informer de toute contrainte particulière</li>
    </ul>
  </>
}, {
  question: "Quelle est la durée moyenne d’un chantier de peinture ?",
  answer: <>
    <p>Tout dépend de la surface et de l’état des murs :</p>
    <ul>
      <li>Une pièce (20m²) → 1 à 2 jours</li>
      <li>Un appartement (50-100m²) → 3 à 7 jours</li>
      <li>Une façade → 4 à 10 jours selon le support</li>
    </ul>
    Nous vous donnons un planning précis après le devis.
  </>
}, {
  question: "Faut-il quitter son logement pendant les travaux ?",
  answer: <p>Ce n'est pas nécessaire pour une peinture intérieure classique ! Nous utilisons des peintures sans odeur et organisons le chantier pour minimiser les nuisances.</p>
}, {
  question: "Travaillez-vous avec des peintures écologiques ?",
  answer: <p>Oui, nous proposons des peintures écologiques sans COV (composés organiques volatils) pour un intérieur plus sain.</p>
}, {
  question: "Quel est le prix moyen d’un chantier de peinture ?",
  answer: <>
    <p>Le tarif dépend de plusieurs critères :</p>
    <ul>
      <li>La surface à peindre</li>
      <li>L’état des murs (préparation nécessaire ou non)</li>
      <li>Le type de peinture et finition choisie</li>
    </ul>
    Nous proposons des devis gratuits et transparents. Contactez-nous !
  </>
}, {
  question: "Proposez-vous des facilités de paiement ?",
  answer: <p>Oui, nous offrons la possibilité de paiement en plusieurs fois selon le montant du chantier.</p>
}, {
  question: "Pouvez-vous intervenir rapidement ?",
  answer: <p>Nos plannings varient selon la demande. Il est conseillé de réserver votre projet à l’avance. Contactez-nous pour connaître nos prochaines disponibilités !</p>
}, {
  question: "Comment demander un devis ?",
  answer: <p>Appelez-nous au 06 00 00 00 00</p>
}
]

export const services: Service[] = [ 
  {
    name: 'Revêtements muraux',
    image: revetement,
  }, {
    name: 'Revêtements de sols',
    image: parquet  
  }, {
    name: 'Rénovation de boiseries',
    image: bois  
  }, {
    name: 'Peinture intérieure',
    image: interieur  
  }, {
    name: 'Peinture extérieure',
    image: exterieur  
  }, {
    name: 'Préparation des supports',
    image: preparation  
  }, {
    name: 'Enduits décoratifs',
    image: enduit  
  }, {
    name: 'Petits travaux complémentaires',
    image: autre  
}];

//the second element of the array is a tranparent png so the reveal for the first element is longer
export const lastProjects: StaticImageData[] = [indoor, transparentImage, wood, transparentImage, bedroom, transparentImage, ];

export const workSteps: WorkStep[] = [{
  name: 'Prise de contact',
  description: 'Vous nous contactez par téléphone ou via le formulaire en ligne pour nous parler de votre projet. Nous échangeons brièvement pour comprendre vos besoins.',
  icon : phone,

}, {
  name: 'Visite sur place',
  description: 'Nous convenons d’un rendez-vous à votre domicile pour évaluer précisément les surfaces à peindre, vos envies (teintes, finitions…), et les éventuelles contraintes techniques.',
  icon: location,
}, {
  name: 'Devis personnalisé & transparent',
  description: 'Sous quelques jours, vous recevez un devis clair, détaillé et sans surprise. Il comprend le choix des matériaux, le planning prévisionnel, et le coût total.',
  icon: clipboard
}, {
  name: 'Validation & planification',
  description: 'Après votre accord, nous fixons ensemble la date de début des travaux. Vous êtes tenu(e) informé(e) de chaque étape.',
  icon: calendar,
}, {
  name: 'Réalisation des travaux',
  description: 'Les travaux sont réalisés avec soin, dans le respect des délais et de votre intérieur. Nous protégeons vos meubles et la zone de chantier est nettoyée chaque jour.',
  icon : paintRoll,
}, {
  name: 'Contrôle qualité & finitions',
  description: 'Avant la remise, une vérification minutieuse est faite. Nous corrigeons les moindres détails si nécessaire pour un résultat impeccable.',
  icon : search,
}, {
  name: 'Livraison du chantier & suivi',
  description: 'Le chantier est livré propre et finalisé. Nous restons disponibles en cas de retouche ou de question après la prestation.',
  icon: donate
}]

export const beforeAfterPhotos: BeforeAfterComparison[] = [{
  name: 'bathroom',
  before: beforeBathroom,
  after: afterBathroom,
},
{
  name: 'bedroom',
  before: bedroomBefore,
  after: bedroomAfter,
},
{
  name: 'living',
  before: beforeLiving,
  after: afterliving,
}]