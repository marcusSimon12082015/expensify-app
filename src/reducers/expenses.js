//Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState,action) => {
  switch (action.type) {
    case 'ADD_EXPANSE':
      return [...state,
      action.expense
    ];
    case 'REMOVE_EXPANSE':
      return state.filter((el) => action.id !== el.id);
    case 'EDIT_EXPANSE':
      return state.map((expense)=>{
        if (expense.id === action.id) {
          return {
              ...expense,
              ...action.updates
          };
        }else{
          return expense;
        };
      });
    default:
      return state;
  }
};
