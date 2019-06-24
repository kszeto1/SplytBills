import React from 'react';
import TableRow from './TableRow.jsx';

const Table = (props) => {
  const {expenses} = props;
  // console.log('expenses', expenses)
  return (
    <table>
      <tbody>
        {expenses.map(row => {
          return <TableRow row={row} key={row.debt_id} />
        })}
      </tbody>
    </table>
  )
};

export default Table;