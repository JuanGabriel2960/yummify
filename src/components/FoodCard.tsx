import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { Food } from '../interfaces';
import { colors, theme } from '../theme';

interface Props {
    food: Food;
}

export const FoodCard = ({ food }: Props) => {

    const { row, lg, light, bold, base } = theme;

    return (
        <View style={styles.foodCard}>
            <View style={[row, { justifyContent: 'space-between' }]}>
                <Text style={{ color: colors.mediumGray }}>{food.calories} Calories</Text>
                <Text>&hearts;</Text>
            </View>
            <Image style={styles.image} source={{ uri: food.image }} />
            <View>
                <Text style={[base, bold]}>{food.name}</Text>
                <Text style={[light, { color: colors.mediumGray }]}>{food.description}</Text>
                <Text style={[base, bold, { marginTop: 10 }]}>${food.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    foodCard: {
        padding: 15,
        borderRadius: 6,
        backgroundColor: colors.lightGray,
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 20,
        alignSelf: 'center'
    }
})
