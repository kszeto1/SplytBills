import React from 'react';

const TableRow = ({row}) => {
  console.log('row', row);
  return (
    <tr>
      <td key={row.debt_id}>{row.debt_id}</td>
      <td key={row.description}>{row.description}</td>
      <td key={row.total}>{row.total}</td>
      <td key={row.amountOwed}>{row.amountOwed}</td>
      <td key={row.borrower}>{row.borrower}</td>
    </tr>
  );
}

export default TableRow;