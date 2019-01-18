import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import TodoContainer from "../../containers/TodoContainer";

export default function TodoList( props ) {
    const { todos } = props;
    return (
        <ScrollView style={ styles.todolist }>
            { todos.map( todo => <TodoContainer key={ todo.id }
                                                id={ todo.id }
                                                title={ todo.title }
                                                completed={ todo.completed }/> )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create( {
    todolist: {
        flex: 1,
        alignSelf: 'stretch',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderLeftColor: 'rgba(0,0,0,.1)',
        borderRightColor: 'rgba(0,0,0,.1)',
        marginBottom: 60
    }
} );