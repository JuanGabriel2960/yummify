import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { HomeStack } from './HomeStack';
import { LoginStack } from './LoginStack';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { colors, theme } from '../theme';
import { navigationOptions } from '../data';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/auth/AuthContext';
import { Loading } from '../screens/Loading';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {

    const { status } = useContext(AuthContext);

    if (status === 'checking') {
        return (
            <Loading />
        )
    }

    return (
        <Drawer.Navigator drawerContent={(props) => <MenuUI {...props} />}>
            {
                (status !== 'authenticated')
                    ? (
                        <Drawer.Screen name="LoginStack" component={LoginStack} />
                    )
                    : (
                        <Drawer.Screen name="HomeStack" component={HomeStack} />
                    )
            }
        </Drawer.Navigator>
    );
}

const MenuUI = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

    const { removeCustomer } = useContext(AuthContext)
    const { _2xl, base, bold } = theme;

    return (
        <DrawerContentScrollView style={styles.menu}>
            <View style={styles.top}>
                <Text style={[_2xl, bold]}>Yummify</Text>
            </View>
            <View>
                {
                    navigationOptions.map(option => (
                        <TouchableOpacity key={option.text} style={styles.link} onPress={() => navigation.navigate(option.navigate)}>
                            <View style={styles.row}>
                                <Icon style={{ marginRight: 10 }} size={17} name={option.icon} color="#202020" />
                                <Text style={base}>{option.text}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                <TouchableOpacity style={styles.link} onPress={() => { navigation.closeDrawer(); removeCustomer() }}>
                    <View style={styles.row}>
                        <Icon style={{ marginRight: 10 }} size={17} name="power" color="#202020" />
                        <Text style={base}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    menu: {
        padding: 10,
    },
    top: {
        borderBottomWidth: 1,
        marginBottom: 30,
        paddingBottom: 5
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    link: {
        backgroundColor: colors.lightGray,
        marginBottom: 15,
        padding: 10
    }
})