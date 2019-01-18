import { connect } from 'react-redux';

import FormTodo from '../components/FormTodo';
import {addTodo} from "../actions";


function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: title => dispatch(addTodo(title))
    };
}

const FormTodoContainer = connect(null, mapDispatchToProps)(FormTodo);

export default FormTodoContainer;