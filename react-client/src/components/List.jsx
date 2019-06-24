import React from 'react';
// import ListItem from './ListItem.jsx';
import Table from './Table.jsx';
import BillForm from './BillForm.jsx';


const List = (props) => {
  let text = `Hi there ${props.username}!\nYour expenses:`;
  return (
    <div>
      <BillForm handleAddBill={props.handleAddBill}/>
      {text.split("\n").map((i, key) => {
        return <div key={key}>{i}</div>;
      })}
      <Table expenses={props.expenses} deleteExpense={props.handleDeleteBill}/>
    </div>
  );
}

export default List;