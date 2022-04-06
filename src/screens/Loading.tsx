import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export const Loading = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size={50} color="#ffbb20" />
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
