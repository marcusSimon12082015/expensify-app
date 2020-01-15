import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpanse } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onRemove = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  };
  onSubmit = (expense) => {
    this.props.editExpanse(this.props.expense.id,expense);
    this.props.history.push('/');
    console.log('update',expense);
  };
  onClick = () => {
    this.props.dispatch(removeExpense({id:this.props.expense.id}));
    this.props.history.push('/');
  };
  render(){
    return(
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onRemove={this.onRemove}
          onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>
            Remove</button>
        </div>
      );
  }
}

const mapStateToProps = (state,props) => {
  return{
    expense:state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch,props) => ({
  editExpense:(id, expense) => dispatch(editExpanse(id,expense)),
  removeExpense:(data) => dispatch(removeExpanse(data))
});


export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
