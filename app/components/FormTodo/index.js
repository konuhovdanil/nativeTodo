import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function FormTodo( props ) {

    return (
        <View style={ styles.form }>
            <TextInput style={ [ styles.input ] }
            placeholder={'Что нужно сделать?'}/>

            <TouchableOpacity>
                <Text>
                    {'Добавить'.toUpperCase()}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create( {
    form: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,.1)',
        minHeight: 60,
        maxHeight: 60,
        minWidth: '100%',
        maxWidth: '100%',
        paddingLeft: 18,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        maxWidth: '75%',
        color: '#757575',
        paddingLeft: 7,
        paddingRight: 7,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 2
    },
    button : {
        fontWeight: 'bold'
    }
} );