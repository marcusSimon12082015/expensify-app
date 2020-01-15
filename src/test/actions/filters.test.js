import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date object',() =>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate:moment(0)
  });
});

test('should generate set end date object',() =>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate:moment(0)
  });
});

test('should generate text filters',() => {
  const action = setTextFilter('freak');
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:'freak'
  });
});

test('should generate default text filters',() => {
  const action = setTextFilter();
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:''
  });
});

test('should set sort by amount',() => {
  const action = sortByAmount();
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT',
  });
});

test('should set sort by date',() => {
  const action = sortByDate();
  expect(action).toEqual({
    type:'SORT_BY_DATE',
  });
});
