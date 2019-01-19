import { connect } from 'react-redux';
import { editTodo, removeTodo, toggleTodo } from "../actions";
import Todo from '../components/Todo';

function mapDispatchToProps( dispatch ) {
    return {
        onToggleTodo: id => dispatch( toggleTodo( id ) ),
        onEditTodo: ( title, id ) => dispatch( editTodo( title, id ) ),
        onRemoveTodo: id => dispatch( removeTodo( id ) )
    };
}

const FilterContainer = connect( null, mapDispatchToProps )( Todo );

export default FilterContainer;