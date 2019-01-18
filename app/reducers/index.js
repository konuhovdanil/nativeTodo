import { combineReducers } from 'redux';

import todos from './todos';
import filter from './filter';

const reducer = combineReducers({
    filter,
    todos
});

export default reducer;