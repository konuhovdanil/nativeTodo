import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function FilterLink(props) {
    return (
        <TouchableOpacity onPress={props.setFilter} style={[styles.link, props.active ? styles.link_is_active : '']}>
            <Text style={[styles.icon, props.active ? styles.icon_is_active : '']}>
                {props.icon}
            </Text>
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
        fontSize: 18,
        color: '#777576'
    },
    link_is_active: {
        backgroundColor: 'rgba(158,158,158,.1)',
        borderBottomColor: '#764abc',
        borderBottomWidth: 2
    },
    icon_is_active: {
        color: '#764abc'
    }
});