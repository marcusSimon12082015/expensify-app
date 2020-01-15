import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { addExpanse } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

console.log(store.getState());

store.dispatch(addExpanse({description:'Water bill',amount:250}));
store.dispatch(addExpanse({description:'Gas bill',amount:450}));
store.dispatch(addExpanse({description:'Trening bill',amount:3450}));
store.dispatch(addExpanse({description:'rent',amount:13450,createdAt:1080}));
//store.dispatch(setTextFilter('water'));

// setTimeout(() =>{
//   store.dispatch(setTextFilter('bill'));
// },3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx,document.getElementById('app'));
