import { Column } from '@/models/column';
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
  one: '10+ ans d’expérience',
  two: 'Travail soigné et sur-mesure',
  three: 'Conseils personnalisés (couleurs, finitions)',
  four: 'Devis clair, sans surprise',
  five: 'Relation directe, à l’écoute',
  six: 'Peintures de qualité pro, options écologiques',
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
  title: 'Peintre Low-Cost ou débutant',
  one: 'Manque d’expérience',
  two: 'Peut être bâclé pour gagner du temps',
  three: 'Peu ou pas de conseils',
  four: 'Tarifs très bas mais qualité incertaine',
  five: 'Flexible mais parfois peu fiable',
  six: 'Produits souvent bas de gamme',
  seven: 'Souvent des retards',
  eight: 'pas de suivi'
},];