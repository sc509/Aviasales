import { combineReducers } from 'redux';

import filterReducer from './filterReducer';
import ticketReducer from './ticketReducer';
import tabsReducer from './tabsReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  ticket: ticketReducer,
  tabs: tabsReducer,
});

export default rootReducer;
