import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { FoodInCart } from '../interfaces';
import { colors, theme } from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    food: FoodInCart;
    type?: 'card' | 'rectangle'
}

export const FoodCard = ({ food, type = 'card' }: Props) => {

    const { row, lg, light, bold, base } = theme;

    if (type == 'rectangle') {
        return (
            <View style={styles.foodCardRectangle}>
                <Image style={styles.imageRectangle} source={{ uri: food.image }} />
                <View>
                    <Text style={[lg, bold]}>{food.name}</Text>
                    <Text style={{ color: colors.mediumGray }}>{food.calories} Calories</Text>
                </View>
                <View>
                    <Text style={[lg, bold]}>${food.price}</Text>
                    <Text style={{ color: colors.mediumGray }}>{food.size == 'S' ? 'Small' : food.size == 'M' ? 'Medium' : 'Large'}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.foodCard}>
            <View style={[row, { justifyContent: 'space-between' }]}>
                <Text style={{ color: colors.mediumGray }}>{food.calories} Calories</Text>
                <Icon style={{ color: colors.mediumGray }} size={17} name="heart" color="#202020" />
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
    },
    foodCardRectangle: {
        padding: 10,
        borderRadius: 6,
        backgroundColor: colors.lightGray,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    imageRectangle: {
        width: 120,
        height: 120
    }
})
