import React from 'react';

class BillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      total: 0,
      amountOwed: 0,
      borrower: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newExpense = {
      description: this.state.description,
      total: parseInt(this.state.total, 10),
      amountOwed: parseInt(this.state.amountOwed, 10),
      borrower: this.state.borrower
    };
    console.log('newExpense', newExpense);
    this.props.handleAddBill(newExpense);
  }
  
  render() {
    console.log('bill form', this.state);
    return (
      <div>
        <form action="" method="get" className="form-example" onSubmit={this.handleSubmit}>
        <h3>Add an expense!</h3>
          <div className="form-example">
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" id="description" onChange={this.handleInputChange} required />
          </div>
          <div className="form-example">
            <label htmlFor="total">Total: </label>
            <input type="number" name="total" id="total" onChange={this.handleInputChange} required />
          </div>
          <div className="form-example">
            <label htmlFor="amount">Amount: </label>
            <input type="number" name="amountOwed" id="amountOwed" onChange={this.handleInputChange} required />
          </div>
          <div className="form-example">
            <label htmlFor="borrower">Borrower: </label>
            <input type="text" name="borrower" id="borrower" onChange={this.handleInputChange} required />
          </div>
          <div className="form-example">
            <input type="submit" value="Subscribe!" />
          </div>
        </form>
      </div>
    );
  }
}

export default BillForm;