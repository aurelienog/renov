import { Column } from '@/models/interface';
import { FaqEntry } from '@/models/interface';
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
  one: '+ de 10 ans d’expérience',
  two: 'Travail soigné et sur-mesure',
  three: 'Conseils personnalisés (couleurs, finitions)',
  four: 'Devis clair, sans surprise',
  five: 'Relation directe, à l’écoute',
  six: 'Peintures de qualité pro',
  seven: 'Engagement respecté',
  eight: 'Garantie et retouches si besoin'
}, {
  title: 'Grosse Entreprise',
  one: 'Variable selon les employés',
  two: 'Standardisé, dépend des équipes',
  three: 'Souvent impersonnel',
  four: 'Frais cachés possibles',
  five: 'Délais longs, peu de personnalisation',
  six: 'Qualité variable selon le contrat',
  seven: 'Dépend du planning chargé',
  eight: 'Service après-vente variable'
}, {
  title: 'Peintre Low-Cost',
  one: 'Manque d’expérience',
  two: 'Peut être bâclé pour gagner du temps',
  three: 'Peu ou pas de conseils',
  four: 'Tarifs très bas mais qualité incertaine',
  five: 'Flexible mais parfois peu fiable',
  six: 'Produits souvent bas de gamme',
  seven: 'Souvent des retards',
  eight: 'Pas de suivi'
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