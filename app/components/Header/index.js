import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header () {
        return (
            <View style={styles.header}>
                <Text style={styles.head}>
                    Native TODO
                </Text>
            </View>
        );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#222',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 60
    },
    head: {
        color: '#764abc',
        fontWeight: 'bold',
        fontSize: 18
    }
});
