import {connect} from 'react-redux';

import TodoList from '../components/TodoList';

function mapStateToProps(state) {
    return {
        todos: state.todos.filter(todo => {
            switch (state.filter) {
                case 'COMPLETED' :
                    return todo.completed;
                case 'UNCOMPLETED' :
                    return !todo.completed;
                default :
                    return todo;
            }
        })
    };
}

const FilterContainer = connect(mapStateToProps)(TodoList);

export default FilterContainer;