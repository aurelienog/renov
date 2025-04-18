import React, { JSX } from 'react';
import Row from './Row';
import { columns } from '@/data/data';
import styles from './styles.module.css';

function ComparisonChart(): JSX.Element {
  return (
    <table className={styles.table}>
      <caption className='visually-hidden'>Tableau comparatif entre artiste peintre, grosse entreprise et peintre low-cost</caption>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th scope="col" key={index}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(columns[0])
          .filter(key => key !== 'title')
          .map((criterion: string, rowIndex: number) => (
            <Row criterion={criterion} columns={columns} key={rowIndex}/>
          ))}
      </tbody>
    </table>
  );
};

export default ComparisonChart;