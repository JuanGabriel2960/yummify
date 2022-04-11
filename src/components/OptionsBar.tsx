import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MenuContext } from '../context/menu/MenuContext';
import { options } from '../data';
import { colors } from '../theme';

export const OptionsBar = () => {

    const { changeType, type } = useContext(MenuContext)

    return (
        <View style={styles.optionsBar}>
            {
                options.map(option => (
                    <TouchableOpacity key={option.text} onPress={() => changeType(option.type)}>
                        <View>
                            <Text style={type === option.type ? styles.focus : styles.normal}>{option.text}</Text>
                        </View>
                    </TouchableOpacity>
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
        alignItems: 'center',
        padding: 10,
        marginTop: 20
    },
    focus: {
        color: 'black',
        fontWeight: '700',
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.boldYellow,
    },
    normal: {
        color: colors.mediumGray
    }
})
