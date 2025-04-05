import React from 'react'
import { Column } from '@/app/types/models/Column';


const Row: React.FC<{ criterion: string }> = ({ criterion, columns }) => (
  <tr>
    <th scope="row">{columns[0][criterion as keyof Column]}</th>

    {columns.slice(1).map((enterprise, colIndex) => (
      <td key={colIndex}>{enterprise[criterion as keyof Column]}</td>
    ))}
  </tr>
);


export default Row