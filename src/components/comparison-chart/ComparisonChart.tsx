import React from 'react';
import Row from './Row';
import { Column } from '@/app/types/models/Column';

/* Update the const columns to update the comparison chart.
The first {} defines the criteria, the following {} are the elements to compare */

const columns: Column[] = [{
  name: 'Critère',
  experience: 'Expérience',
  finitions: 'Qualité des finitions',
  conseils: 'Accompagnement & conseils',
  devis: 'Devis et transparence',
  relation: 'Flexibilité & relation client',
  materiaux: 'Matériaux utilisés',
  delais: 'Respect des délais',
  travaux: 'Suivi après travaux'
  }, {
  name: 'Votre Artisan Peintre',
  experience: '10+ ans d’expérience',
  finitions: 'Travail soigné et sur-mesure',
  conseils: 'Conseils personnalisés (couleurs, finitions)',
  devis: 'Devis clair, sans surprise',
  relation: 'Relation directe, à l’écoute',
  materiaux: 'Peintures de qualité pro, options écologiques',
  delais: 'Engagement respecté',
  travaux: 'Garantie et retouches si besoin'
}, {
  name: 'Grosse Entreprise',
  experience: 'Variable selon les employés',
  finitions: 'Standardisé, dépend des équipes',
  conseils: 'Souvent impersonnel',
  devis: 'Frais cachés possibles',
  relation: 'Délais longs, peu de personnalisation',
  materiaux: 'Qualité variable selon le contrat',
  delais: 'Dépend du planning chargé',
  travaux: 'Service après-vente variable'
}, {
  name: 'Peintre Low-Cost ou débutant',
  experience: 'Manque d’expérience',
  finitions: 'Peut être bâclé pour gagner du temps',
  conseils: 'Peu ou pas de conseils',
  devis: 'Tarifs très bas mais qualité incertaine',
  relation: 'Flexible mais parfois peu fiable',
  materiaux: 'Produits souvent bas de gamme',
  delais: 'Souvent des retards',
  travaux: 'pas de suivi'
},];

function ComparisonChart(): React.ReactElement {
  return (
    <table>
      <caption>Tableau comparatif</caption>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(columns[0])
          .filter(key => key !== 'name')
          .map((criterion, rowIndex) => (
            <Row criterion={criterion} columns={columns} key={rowIndex}/>
          ))}
      </tbody>
    </table>
  );
};

export default ComparisonChart;