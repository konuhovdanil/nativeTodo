import { TOGGLE_TODO } from '../actions';

function reducer( state = {}, action ) {
    switch ( action.type ) {
        case TOGGLE_TODO:
            let index = state.findIndex( todo => todo.id === action.id );

            return [
                ...state.slice( 0, index ),
                Object.assign( {}, state[ index ], { completed: !state[ index ][ 'completed' ] } ),
                ...state.slice( index + 1 )
            ];
        default:
            return state;
    }
}

export default reducer;