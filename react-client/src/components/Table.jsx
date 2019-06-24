import React from 'react';
import TableRow from './TableRow.jsx';

const Table = (props) => {
  const {expenses} = props;
  // console.log('expenses', expenses)
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Total</th>
          <th>Amount borrowed</th>
          <th>Who owes you</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(row => {
          return <TableRow row={row} key={row.debt_id} deleteExpense={props.deleteExpense} />
        })}
      </tbody>
    </table>
  )
};

export default Table;