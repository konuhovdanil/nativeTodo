import { AsyncStorage } from "react-native"
import { TOGGLE_TODO, ADD_TODO, EDIT_TODO, REMOVE_TODO } from '../actions';

function reducer( state = {}, action ) {
    switch ( action.type ) {
        case TOGGLE_TODO:
            let index = state.findIndex( todo => todo.id === action.id );
            let newState = [
                ...state.slice( 0, index ),
                Object.assign( {}, state[ index ], { completed: !state[ index ][ 'completed' ] } ),
                ...state.slice( index + 1 )
            ];

            _storeData( newState );

            return newState;

        case ADD_TODO: {
            let newState = [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    completed: false
                }
            ];

            _storeData( newState );

            return newState;
        }
        case EDIT_TODO: {
            let index = state.findIndex( todo => todo.id === action.id );
            let newState = [
                ...state.slice( 0, index ),
                Object.assign( {}, state[ index ], { title: action.title } ),
                ...state.slice( index + 1 )
            ];
            _storeData( newState );

            return newState;
        }
        case REMOVE_TODO: {
            let index = state.findIndex( todo => todo.id === action.id );

            return [
                ...state.slice( 0, index ),
                ...state.slice( index + 1 )
            ];
        }
        default:
            return state;
    }
}

async function _storeData( todos ) {
    try {
        await AsyncStorage.setItem( 'TODOS', JSON.stringify( todos ) );
    } catch ( error ) {
        alert( 'Error' );
    }
}

export default reducer;