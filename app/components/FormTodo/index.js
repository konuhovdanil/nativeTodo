import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

export default class FormTodo extends React.Component {

    state = {
        title: '',
        disabled: true
    };

    render() {
        const {onAddTodo} = this.props;
        let {title, disabled} = this.state;
        return (
            <View style={styles.form}>
                <TextInput style={[styles.input]}
                           placeholder={'Что нужно сделать?'}
                           onChangeText={title => this.setState({title})}
                           value={title}/>

                <TouchableOpacity style={[styles.button, title.length > 0 ? '' : styles.disabled]}
                                  disabled={title.length > 0 ? false : true}
                                  onPress={() => {
                                      onAddTodo(title);
                                      this.setState({title: ''});
                                  }}>
                    <Text style={styles.buttonText}>
                        {'Добавить'.toUpperCase()}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,.1)',
        minHeight: 58,
        maxHeight: 58,
        minWidth: '100%',
        maxWidth: '100%',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        maxWidth: '75%',
        height: 37,
        color: '#757575',
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 2
    },
    button: {
        opacity: 1,
        width: '25%'
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#757575'
    },
    disabled: {
        opacity: 0.5
    }
});

// onChangeText={(title) => this.setState({title})}