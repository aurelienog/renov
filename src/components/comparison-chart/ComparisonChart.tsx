import React, { JSX } from 'react';
import Row from './Row';
import { columns } from '@/data/data';

function ComparisonChart(): JSX.Element {
  return (
    <table>
      <caption>Tableau comparatif</caption>
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