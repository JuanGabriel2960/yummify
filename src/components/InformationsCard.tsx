import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { colors, theme } from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';

export const InformationsCard = () => {

    const { lg, bold } = theme;

    return (
        <View style={styles.informationsCard}>
            <Text style={bold}>Your informations</Text>
            <View style={styles.informationsInfo}>
                <Icon style={{ marginRight: 10, backgroundColor: colors.boldYellow, padding: 10, borderRadius: 100 }} size={20} name="location-sharp" color="#202020" />
                <View>
                    <Text style={{ color: colors.mediumGray }}>Your Delivery Address</Text>
                    <Text style={[lg, bold]}>Caribbean Lake Park, Punta Cana</Text>
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