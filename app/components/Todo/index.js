import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View, Text, Animated } from 'react-native';

export default class Todo extends React.Component {
    state = {
        expanded: true,
        animation: new Animated.Value(27),
        minWidth: 27,
        maxWidth: 75
    };

    toggleMenu = () => {
        let initialValue,
            finalValue,
            expended = this.state.expanded ? ( finalValue = this.state.maxWidth, initialValue = this.state.minWidth ) : ( initialValue = this.state.maxWidth, finalValue = this.state.minWidth );

        this.setState( {
            expanded: !this.state.expanded
        } );

        this.state.animation.setValue( initialValue );
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    };

    render() {
        const { completed, title, id, onToggleTodo } = this.props;
        let { toggledValue } = this.state;

        return (
            <View style={ styles.todo }>
                <Icon name={ completed ? 'check-box' : 'check-box-outline-blank' }
                      iconStyle={ styles.checkbox }
                      color={ completed ? 'lightgray' : '#757575' }
                      onPress={ () => onToggleTodo( id ) }/>
                <Text style={ [ styles.title, completed ? styles.checked : '' ] }>
                    { title }
                </Text>


                <Animated.View style={ [ styles.menu, { width: this.state.animation } ] }>
                        <Icon name={ 'settings' }
                              iconStyle={ [ styles.additional, { marginLeft: 0 } ] }
                              color={ '#757575' }
                              onPress={ this.toggleMenu }/>
                        <Icon name={ 'edit' }
                              color={ '#757575' }
                              iconStyle={ styles.settings }/>

                        <Icon name={ 'delete' }
                              color={ '#757575' }
                              iconStyle={ styles.settings }/>
                </Animated.View>


            </View>
        )
    }
}

const styles = StyleSheet.create( {
    todo: {
        flex: 1,
        borderBottomWidth: 1,
        minHeight: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'rgba(0,0,0,.1)',
        padding: 10
    },
    checkbox: {},
    title: {
        flex: 1,
        color: 'rgb(117,117,117)',
        textDecorationLine: 'none',
        paddingLeft: 10
    },
    checked: {
        color: '#D3D3D3',
        textDecorationLine: 'line-through'
    },
    menu: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 50,
        right: 10,
        top: '50%',
        overflow: 'hidden'
    },
    additional: {
        width: 25,
        height: 25,
        marginLeft: 25
    }
} );