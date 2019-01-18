import { connect } from 'react-redux';

import { toggleTodo } from "../actions";
import Todo from '../components/Todo';

function mapDispatchToProps( dispatch ) {
    return {
        onToggleTodo: id => dispatch( toggleTodo( id ) )
    };
}

const FilterContainer = connect( null, mapDispatchToProps )( Todo );

export default FilterContainer;