import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { options } from '../data';
import { colors } from '../theme';

export const OptionsBar = () => {

    return (
        <View style={styles.optionsBar}>
            {
                options.map(option => (
                    <TouchableHighlight key={option}>
                        <View>
                            <Text style={{ color: colors.mediumGray }}>{option}</Text>
                        </View>
                    </TouchableHighlight>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    optionsBar: {
        backgroundColor: colors.lightGray,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20
    }
})
