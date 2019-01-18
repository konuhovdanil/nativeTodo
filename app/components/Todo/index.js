import React from 'react';
import { StyleSheet, View, Text, CheckBox } from 'react-native';

export default function Todo( props ) {
    const { completed, title, id, onToggleTodo } = props;

    return (
        <View style={ styles.todo }>
            <CheckBox value={ completed }
                      onChange={ () => onToggleTodo( id ) }/>
            <Text style={ [ styles.title, completed ? styles.checked : '' ] }>
                { title }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create( {
    todo: {
        flex: 1,
        borderBottomWidth: 1,
        minHeight: 60,
        maxHeight: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'rgba(0,0,0,.1)'
    },
    checkbox: {
        flex: 1,
        backgroundColor: '#777576'
    },
    title: {
        flex: 1,
        color: 'rgb(117,117,117)',
        textDecorationLine: 'none'
    },
    checked: {
        color: '#D3D3D3',
        textDecorationLine: 'line-through'
    }
} );