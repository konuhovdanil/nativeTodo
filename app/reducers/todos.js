import {AsyncStorage} from "react-native"
import {TOGGLE_TODO, ADD_TODO, EDIT_TODO, REMOVE_TODO} from '../actions';

function reducer(state = [], action) {
    switch (action.type) {
        case TOGGLE_TODO:
            let index = state.findIndex(todo => todo.id === action.id);

            return [
                ...state.slice(0, index),
                Object.assign({}, state[index], {completed: !state[index]['completed']}),
                ...state.slice(index + 1)
            ];

        case ADD_TODO: {

            return [
                ...state,
                {
                    id: state.length  ? state.length + 1 : 1,
                    title: action.title,
                    completed: false
                }
            ];
        }
        case EDIT_TODO: {
            let index = state.findIndex(todo => todo.id === action.id);

            return [
                ...state.slice(0, index),
                Object.assign({}, state[index], {title: action.title}),
                ...state.slice(index + 1)
            ];
        }
        case REMOVE_TODO: {
            let index = state.findIndex(todo => todo.id === action.id);

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        }
        default:
            return [...state];
    }
}

export default reducer;