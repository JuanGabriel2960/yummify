import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { colors, theme } from '../theme';

export const InformationsCard = () => {

    const { lg, bold } = theme;

    return (
        <View style={styles.informationsCard}>
            <Text style={bold}>Your informations</Text>
            <View style={styles.informationsInfo}>
                <Text style={styles.icon}>!</Text>
                <View>
                    <Text style={{ color: colors.mediumGray }}>Your Delivery Address</Text>
                    <Text style={[lg, bold]}>sadsadAddresssadsad</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    informationsCard: {
        backgroundColor: colors.lightGray,
        padding: 15,
        borderRadius: 6
    },
    informationsInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    icon: {
        marginRight: 15
    }
})