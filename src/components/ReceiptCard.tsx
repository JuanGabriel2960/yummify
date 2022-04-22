import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { State as CartState } from '../screens/Cart'
import { colors, theme } from '../theme';

interface Props {
    billing: CartState,
    date: string
}

export const ReceiptCard = ({ billing, date }: Props) => {

    const { container, bold, _2xl, _3xl, lg, base, row } = theme;

    return (
        <View style={styles.receiptCard}>
            <View>
                <Text style={[{ color: colors.lightBlue }, base]}>You have to pay</Text>
                <Text style={[{ color: 'white' }, bold, _3xl]}>{billing.total} USD</Text>
            </View>
            <View style={styles.line}></View>
            <View style={{ marginBottom: 9 }}>
                <Text style={{ color: colors.lightBlue }}>Company</Text>
                <Text style={[base, bold, { color: 'white' }]}>Yummify</Text>
            </View>
            <View style={{ marginBottom: 9 }}>
                <Text style={{ color: colors.lightBlue }}>Order Number</Text>
                <Text style={[base, bold, { color: 'white' }]}>*******</Text>
            </View>
            <View>
                <Text style={{ color: colors.lightBlue }}>Date</Text>
                <Text style={[base, bold, { color: 'white' }]}>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    receiptCard: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 13,
        backgroundColor: colors.mediumBlue
    },
    line: {
        borderBottomColor: colors.lightBlue,
        borderBottomWidth: 1,
        marginVertical: 15
    }
})
