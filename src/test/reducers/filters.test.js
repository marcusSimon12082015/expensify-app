import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values',() => {
  const state = filtersReducer(undefined,{ type:'@@INIT' });
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
  });
});

test('should set sortBy amount',() => {
  const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy date',() => {
  const currentState = {
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'amount'
  };

  const action = { type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState,action);
  expect(state.sortBy).toBe('date');
});

//should set text filter
test('should set text filter',() => {
  const currentState = {
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'amount'
  };
  const action = { type:'SET_TEXT_FILTER',text:'adult'};
  const state = filtersReducer(currentState,action);
  expect(state.text).toBe('adult');
});
//should set start date filter
test('should set start date',() => {
  const startDate = moment();
  const action = { type:'SET_START_DATE',startDate:startDate};
  const state = filtersReducer(undefined,action);
  expect(state.startDate).toEqual(startDate);
});
//should set end date filter
test('should set end date',() => {
  const endDate = moment();
  const action = { type:'SET_END_DATE',endDate:endDate};
  const state = filtersReducer(undefined,action);
  expect(state.endDate).toEqual(endDate);
});
