import React, { JSX } from 'react';
import Row from './Row';
import styles from './styles.module.css';
import { Column } from '@/lib/models/interfaces';

function ComparisonChart({data} : {data: Column[]}): JSX.Element {
  return (
    <table className={styles.table}>
      <caption className='visually-hidden'>Tableau comparatif entre artiste peintre, grosse entreprise et peintre low-cost</caption>
      <thead>
        <tr>
          {data.map((data, index) => (
            <th scope="col" key={index}>{data.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(data[0])
          .filter(key => key !== 'title')
          .map((criterion: string, rowIndex: number) => (
            <Row criterion={criterion} columns={data} key={rowIndex}/>
          ))}
      </tbody>
    </table>
  );
};

export default ComparisonChart;