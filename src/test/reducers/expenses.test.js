import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',() => {
  const state = expensesReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id',() => {
  const action = {
    type:'REMOVE_EXPANSE',
    id:expenses[1].id
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found',() => {
  const action = {
    type:'REMOVE_EXPANSE',
    id:'-1'
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});

//should add expense
test('should add expense',() => {
  const newExpense = {
    id:'4',
    description:'Home repair',
    note:'',
    amount:345,
    createdAt:0
  }
  const action = {
    type:'ADD_EXPANSE',
    expense:newExpense
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([...expenses,newExpense]);
});

//should edit expense
test('should edit expense',() => {
  const editExpense = {
    id:'1',
    description:'Home usage',
    note:'This a note',
    amount:445,
    createdAt:0
  }
  const action = {
    type:'EDIT_EXPANSE',
    id:editExpense.id,
    updates:editExpense
  };
  const state = expensesReducer(expenses,action);
  expect(state[0]).toEqual(editExpense);
});
//should not edit expense if expense not found
test('should not edit expense',() => {
  const editExpense = {
    id:'12',
    description:'Home usage',
    note:'This a note',
    amount:445,
    createdAt:0
  }
  const action = {
    type:'EDIT_EXPANSE',
    updates:editExpense
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});
