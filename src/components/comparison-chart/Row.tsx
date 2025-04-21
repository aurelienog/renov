import React, { JSX } from 'react';
import { Column } from '@/models/interfaces';

function Row({ criterion, columns }: { criterion: string, columns: Column[] }): JSX.Element  {
  return (
    <tr>
      <th scope="row">{columns[0][criterion as keyof Column]}</th>

      {columns.slice(1).map((enterprise: Column, colIndex: number) => (
        <td key={colIndex}>{enterprise[criterion as keyof Column]}</td>
      ))}
    </tr>
  );
}

export default Row;