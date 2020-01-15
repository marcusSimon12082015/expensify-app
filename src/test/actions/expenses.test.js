import { addExpanse, editExpanse, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object',() => {
  const action = removeExpense({id:'123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPANSE',
    id:'123abc'
  });
});

test('should setup edit action object',() => {
  const action = editExpanse('123abc',{note:'Hey this is note'});
  expect(action).toEqual({
    type:'EDIT_EXPANSE',
    id:'123abc',
    updates:{
      note:'Hey this is note'
    }
  });
});

test('should setup add expense action object', () => {
  const expenseData = {
    description:'dean',
    amount:10960,
    createdAt:1000,
    note:'This is note'
  };
  const action = addExpanse(expenseData);
  expect(action).toEqual({
      type:'ADD_EXPANSE',
      expense:{
        ...expenseData,
        id:expect.any(String)
      }
  });
});

test('should setup default object values',() => {
  const expenseDefaultData = {
    description:'',
    amount:0,
    createdAt:0,
    note:''
  };
  const action = addExpanse();
  expect(action).toEqual({
    type:'ADD_EXPANSE',
    expense:{
      ...expenseDefaultData,
      id:expect.any(String)
    }
  });
});
