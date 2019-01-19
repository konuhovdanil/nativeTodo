import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View, Text, Animated, TextInput } from 'react-native';

export default class Todo extends React.Component {
    state = {
        title: '',
        editable: false,
        expanded: true,
        animation: new Animated.Value( 27 ),
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

    componentWillMount() {
        this.setState( { title: this.props.title } )
    }

    render() {
        const { completed, id, onToggleTodo, onRemoveTodo, onEditTodo } = this.props;
        let { toggledValue, editable } = this.state;

        return (
            <View style={ styles.todo }>
                <Icon name={ completed ? 'check-box' : 'check-box-outline-blank' }
                      iconStyle={ styles.checkbox }
                      color={ completed ? 'lightgray' : '#757575' }
                      onPress={ () => onToggleTodo( id ) }/>
                { editable
                    ? <TextInput style={ [ styles.input ] }
                                 onChangeText={ title => this.setState( { title } ) }
                                 value={ this.state.title }/>
                    : <Text style={ [ styles.title, completed ? styles.checked : '' ] }>
                        { this.props.title }
                    </Text> }


                <Animated.View style={ [ styles.menu, { width: this.state.animation } ] }>
                    { editable
                        ? <Icon name={ 'save' }
                                iconStyle={ [ styles.additional, { marginLeft: 0 } ] }
                                color={ '#757575' }
                                onPress={ () => {
                                    onEditTodo( id, this.state.title );
                                    this.setState( { editable: !this.state.editable } );
                                } }/>
                        : <Icon name={ 'settings' }
                                iconStyle={ [ styles.additional, { marginLeft: 0 } ] }
                                color={ '#757575' }
                                onPress={ this.toggleMenu }/> }

                    <Icon name={ 'edit' }
                          color={ '#757575' }
                          iconStyle={ styles.settings }
                          onPress={ () => {
                              this.toggleMenu();
                              this.setState( { editable: !this.state.editable } );
                          } }/>

                    <Icon name={ 'delete' }
                          color={ '#757575' }
                          iconStyle={ styles.settings }
                          onPress={ () => onRemoveTodo( id ) }/>
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
    input: {
        flex: 1,
        height: 37,
        maxWidth: '75%',
        color: '#757575',
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 2
    },
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