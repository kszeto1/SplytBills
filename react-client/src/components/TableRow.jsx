import React from 'react';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    // console.log('e target', e.target.id);
    const value = parseInt(e.target.id);
    // console.log('val', typeof value);
    const debtIdObj = {
      debt_id: value
    };
    // console.log('debtidobj', debtIdObj);
    this.props.deleteExpense(debtIdObj);
  }
  // console.log('row', row);
  render() {
    const {row} = this.props;
    return (
      <tr>
        <td key={row.debt_id} id={row.debt_id} onClick={this.handleClick}>{row.debt_id}</td>
        <td key={row.description}>{row.description}</td>
        <td key={row.total}>{row.total}</td>
        <td key={row.amountOwed}>{row.amountOwed}</td>
        <td key={row.borrower}>{row.borrower}</td>
      </tr>
    );
  }
}

export default TableRow;