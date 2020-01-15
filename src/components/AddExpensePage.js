import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpanse } from '../actions/expenses';

export class AddExpensePage extends React.Component{
  onSubmit = (expense) => {
      console.log(expense);
      //props.dispatch(addExpanse(expense));
      this.props.addExpense(expense);
      this.props.history.push('/');
  };
  render(){
    return(
      <div>
        This is from my add expense component
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense:(expense) => dispatch(addExpanse(expense))
});

export default connect(undefined,mapDispatchToProps)(AddExpensePage);
