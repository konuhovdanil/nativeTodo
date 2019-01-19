import React from 'react';
import {StyleSheet, View} from 'react-native';

import FilterLink from '../FilterLink';

export default function Filter(props) {
    return (
        <View style={styles.filter}>
            <FilterLink icon={'list'} active={props.filter === 'ALL'} setFilter={() => props.onSetFilter('ALL')} />
            <FilterLink icon={'check-box'} active={props.filter === 'COMPLETED'} setFilter={() => props.onSetFilter('COMPLETED')} />
            <FilterLink icon={'check-box-outline-blank'} active={props.filter === 'UNCOMPLETED'} setFilter={() => props.onSetFilter('UNCOMPLETED')} />
        </View>
    )
}

const styles = StyleSheet.create({
    filter: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 40
    }
});