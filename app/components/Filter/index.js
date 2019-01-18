import React from 'react';
import {StyleSheet, View} from 'react-native';

import FilterLink from '../FilterLink';

export default function Filter(props) {
    return (
        <View style={styles.filter}>
            <FilterLink icon={'\u2630'} active={props.filter === 'ALL'} setFilter={() => props.onSetFilter('ALL')} />
            <FilterLink icon={'\u2611'} active={props.filter === 'COMPLETED'} setFilter={() => props.onSetFilter('COMPLETED')} />
            <FilterLink icon={'\u2610'} active={props.filter === 'UNCOMPLETED'} setFilter={() => props.onSetFilter('UNCOMPLETED')} />
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