import React from 'react';
import { Column } from '@/models/column';


const Row: React.FC<{ criterion: string , columns:Column[]}> = ({ criterion, columns }) => (
  <tr>
    <th scope="row">{columns[0][criterion as keyof Column]}</th>

    {columns.slice(1).map((enterprise: Column, colIndex: number) => (
      <td key={colIndex}>{enterprise[criterion as keyof Column]}</td>
    ))}
  </tr>
);


export default Row