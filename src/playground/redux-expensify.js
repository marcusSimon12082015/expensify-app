import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPANSE
const addExpanse = (
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
const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPANSE',
    id:id
});
//EDIT_EXPANSE
const editExpanse = (id,updates) => ({
  type:'EDIT_EXPANSE',
  id,
  updates
});
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type:'SET_TEXT_FILTER',
  text
});
//SORT_BY_DATE
const sortByDate = () => ({
  type:'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type:'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate
});
//SET_END_DATE
const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState,action) => {
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
////////////////////////////////////////////////////////////////////////////////

//Filters Reducer
const filtersReducerDefaultState = {
  text:'',
  sortBy:'date',
  startDate:undefined,
  endDate:undefined
};

const filtersReducer = (state = filtersReducerDefaultState,action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
        return{
          ...state,text:action.text
        };
    case 'SORT_BY_DATE':
      return {
        ...state,sortBy:'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,sortBy:'amount'
      };
    case 'SET_START_DATE':
      return{
        ...state,startDate:action.startDate
      };
    case 'SET_END_DATE':
      return{
        ...state,endDate:action.endDate
      };
    default:
      return state;
  }
};
/////////////////////////////////////////////////////////////////////////////////


const getVisibleExpenses = (expenses,{ text, sortBy, startDate, endDate }) =>{
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

//Store creation
const store = createStore(
  combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpanse({description:'Rent',amount:100, createdAt:-21000}));
const expenseTwo = store.dispatch(addExpanse({description:'Coffee',amount:10,createdAt:-1000}));
// const expense3 = store.dispatch(addExpanse({description:'Bike',amount:10000}));
// const expense4 = store.dispatch(addExpanse({description:'Boat',amount:510}));
// const expense5 = store.dispatch(addExpanse({description:'Skies',amount:130}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
//
// store.dispatch(editExpanse(expenseTwo.expense.id, { amount:500 }));
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter('green'));
//
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());



const demoState = {
  expenses:[{
    id:'sgdsgdgs',
    description:'January Rent',
    note:'This was the final payment',
    amount:54500,
    createdAt:0
  }],
  filters:{
    text:'rent',
    sortBy:'amount',
    startDate:undefined,
    endDate:undefined
  }
};


//Object spread operator
// const user = {name:'Jen',age:24};
//
// console.log({...user,location:'Philadelphia'});
