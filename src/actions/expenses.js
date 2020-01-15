import uuid from 'uuid';

//ADD_EXPANSE
export const addExpanse = (
  { description = "",note = "", amount = 0, createdAt = 0} = {}
) => ({
  type:'ADD_EXPANSE',
  expense:{
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
//REMOVE_EXPANSE
export const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPANSE',
    id:id
});
//EDIT_EXPANSE
export const editExpanse = (id,updates) => ({
  type:'EDIT_EXPANSE',
  id,
  updates
});
