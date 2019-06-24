import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Axios from 'axios';
import List from './components/List.jsx';
import UserLogin from './components/UserLogin.jsx';
// import BillForm from './components/BillForm.jsx';
// import ListItem from './components/ListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      username: '',
      isLoggedIn: false,
      newExpense: []
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBill = this.handleAddBill.bind(this);
    this.getExpenses = this.getExpenses.bind(this);
  }

  getExpenses() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          expenses: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  componentDidMount() {
    this.getExpenses();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({isLoggedIn: true });
  }

  handleAddBill(newExpense) {
    console.log('client new expense', newExpense);
    Axios.post('/splytBills', newExpense)
      .then((res) => {
        this.getExpenses();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {
    //TODO: conditionally render userlogin and list components
    console.log('state', this.state);
    const isLoggedIn = this.state.isLoggedIn;
    if (this.state.expenses.length === 0) {
      return <div></div>
    }
    return (
      <div>
      {isLoggedIn ? (
        <div>
          <h1>Expenses List</h1>
          <List username={this.state.username} expenses={this.state.expenses} handleAddBill={this.handleAddBill}/>
        </div>
        ) : (
          <UserLogin handleLogin={this.handleLoginSubmit} handleInputChange={this.handleInputChange} />
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));