import { ACTIVE_TABS } from './types';

const initialState = {
  activeTabs: null,
};

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_TABS:
      return {
        ...state,
        activeTabs: action.payload,
      };
    default:
      return state;
  }
};

export default tabsReducer;
