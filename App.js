import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Header from './app/components/Header';
import FilterContainer from './app/containers/FilterContainer';
import TodoListContainer from './app/containers/TodoListContainer';
import FormTodoContainer from "./app/containers/FormTodoContainer";
import configureStore from './store/configureStore';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ configureStore().store}>
               <PersistGate loading={null} persistor={configureStore().persistor}>
                   <View style={styles.app}>
                       <StatusBar hidden/>
                       <Header/>
                       <FilterContainer/>
                       <TodoListContainer/>
                       <FormTodoContainer/>
                   </View>
               </PersistGate>
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