import React from 'react';
import { Icon } from 'react-native-elements';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function FilterLink(props) {
    return (
            <TouchableOpacity onPress={props.setFilter} style={[styles.link, props.active ? styles.link_is_active : '']}>
                    <Icon name={props.icon} iconStyle={styles.icon} color={props.active ? '#764abc' : '#777576'}/>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        flex: 1,
        height: 40,
        lineHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'rgba(0,0,0,.1)',
        borderBottomWidth: 1
    },
    icon: {
        fontWeight: 'bold',
        fontSize: 18
    },
    link_is_active: {
        backgroundColor: 'rgba(158,158,158,.1)',
        borderBottomColor: '#764abc',
        borderBottomWidth: 2
    }
});