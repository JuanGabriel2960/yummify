import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { colors, theme } from '../theme';
const addressIcon = require("../assets/address-icon.png");

export const InformationsCard = () => {

    const { lg, bold } = theme;

    return (
        <View style={styles.informationsCard}>
            <Text style={bold}>Your informations</Text>
            <View style={styles.informationsInfo}>
                <Image source={addressIcon} style={styles.icon} />
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
        marginRight: 15,
    }
})