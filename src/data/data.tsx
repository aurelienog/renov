import { Column } from '@/models/interface';
import { FaqEntry } from '@/models/interface';
import Image from 'next/image';

/* Update const columns to modify the comparison chart.
The first {} defines the criteria, the following {} are the elements to compare.
Each key is a line */

export const columns: Column[] = [{
  title: 'Critère',
  one: 'Expérience',
  two: 'Qualité des finitions',
  three: 'Accompagnement & conseils',
  four: 'Devis et transparence',
  five: 'Flexibilité & relation client',
  six: 'Matériaux utilisés',
  seven: 'Respect des délais',
  eight: 'Suivi après travaux'
  }, {
  title: 'Votre Artisan Peintre',
  one: <>
  <Image src='/assets/check.svg' alt='' width={24} height={24}/>
  <span>+ de 10 ans d’expérience</span>
  </>,
  two: <>
  <Image src='/assets/check.svg' alt='' width={24} height={24}/>
  <span>Travail soigné et sur-mesure</span>
  </>,
  three: <>
  <Image src='/assets/check.svg' alt='' width={24} height={24}/>
  <span>Conseils personnalisés (couleurs, finitions)</span>
  </>,
  four: <>
  <Image src='/assets/check.svg' alt='' width={24} height={24}/>
  <span>Devis clair, sans surprise</span>
  </>,
  five: <>
  <Image src='/assets/check.svg' alt='' width={24} height={24}/>
  <span>Relation directe, à l’écoute</span>
  </>,
  six: <>
  <Image src='/assets/check.svg' alt='' width={24} height={24}/>
  <span>Peintures de qualité pro</span>
  </>,
  seven: <>
  <Image src='/assets/check.svg' alt='' width={24} height={24}/>
  <span>Engagement respecté</span>
  </>,
  eight: <>
  <Image src='/assets/check.svg' alt='' width={24} height={24}/>
  <span>Garantie et retouches si besoin</span>
  </>,
}, {
  title: 'Grosse Entreprise',
  one: <>
  <Image src='/assets/warning.svg' alt='' width={24} height={24}/>
  <span>Variable selon les employés</span>
  </>,
  two: <>
  <Image src='/assets/warning.svg' alt='' width={24} height={24}/>
  <span>Standardisé, dépend des équipes</span>
  </>,
  three: <>
  <Image src='/assets/warning.svg' alt='' width={24} height={24}/>
  <span>Souvent impersonnel</span>
  </>,
  four: <>
  <Image src='/assets/warning.svg' alt='' width={24} height={24}/>
  <span>Frais cachés possibles</span>
  </>, 
  five: <>
  <Image src='/assets/warning.svg' alt='' width={24} height={24}/>
  <span>Délais longs, peu de personnalisation</span>
  </>,
  six: <>
  <Image src='/assets/warning.svg' alt='' width={24} height={24}/>
  <span>Qualité variable selon le contrat</span>
  </>,
  seven: <>
  <Image src='/assets/warning.svg' alt='' width={24} height={24}/>
  <span>Dépend du planning chargé</span>
  </>, 
  eight: <>
  <Image src='/assets/warning.svg' alt='' width={24} height={24}/>
  <span>Service après-vente variable</span>
  </>, 
}, {
  title: 'Peintre Low-Cost',
  one: <>
  <Image src='/assets/x.svg' alt='' width={24} height={24}/>
  <span>Manque d’expérience</span>
  </>,
  two: <>
  <Image src='/assets/x.svg' alt='' width={24} height={24}/>
  <span>Peut être bâclé pour gagner du temps</span>
  </>,
  three: <>
  <Image src='/assets/x.svg' alt='' width={24} height={24}/>
  <span>Peu ou pas de conseils</span>
  </>, 
  four: <>
  <Image src='/assets/x.svg' alt='' width={24} height={24}/>
  <span>Tarifs très bas mais qualité incertaine</span>
  </>,
  five: <>
  <Image src='/assets/x.svg' alt='' width={24} height={24}/>
  <span>Flexible mais parfois peu fiable</span>
  </>,
  six: <>
  <Image src='/assets/x.svg' alt='' width={24} height={24}/>
  <span>Produits souvent bas de gamme</span>
  </>,
  seven: <>
  <Image src='/assets/x.svg' alt='' width={24} height={24}/>
  <span>Souvent des retards</span>
  </>, 
  eight: <>
  <Image src='/assets/x.svg' alt='' width={24} height={24}/>
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