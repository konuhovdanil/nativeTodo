import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import state from './store/state';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './app/reducers';

import Header from './app/components/Header';
import FilterContainer from './app/containers/FilterContainer';
import TodoListContainer from './app/containers/TodoListContainer';
import FormTodoContainer from "./app/containers/FormTodoContainer";

const store = createStore( reducer, state );

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <View style={styles.app}>
                    <StatusBar hidden/>
                    <Header/>
                    <FilterContainer/>
                    <TodoListContainer/>
                    <FormTodoContainer/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create( {
    app: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
    }
} );