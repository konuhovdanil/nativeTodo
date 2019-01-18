import { connect } from 'react-redux';

import TodoList from '../components/TodoList';

function mapStateToProps( state ) {
    return {
        todos: state.todos.filter(todo => {
            if (state.filter === 'COMPLETED') {
                return todo.completed;
            } else if (state.filter === 'UNCOMPLETED') {
                return !todo.completed;
            } else {
                return todo;
            }
        })
    };
}
const FilterContainer = connect( mapStateToProps )( TodoList );

export default FilterContainer;