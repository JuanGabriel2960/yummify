import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import { colors, theme } from '../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

export const Login = ({ navigation }: Props) => {

    const { container, bold, _2xl, xl, lg } = theme;
    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })

    const submit = () => {
        console.log({ email, password })
        Keyboard.dismiss()
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={'height'}>
            <View style={container}>
                <View >
                    <Text style={[_2xl, bold, { marginBottom: 40 }]}>Login</Text>
                    <View style={[styles.inputContainer, { marginBottom: 13 }]}>
                        <TextInput style={styles.input} onChangeText={(value) => onChange(value, 'email')} value={email} onSubmitEditing={submit} placeholder="Email" placeholderTextColor={colors.mediumGray} keyboardType="email-address" autoCapitalize='none' autoCorrect={false} />
                        <Icon name="mail" style={[bold, xl]} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} onChangeText={(value) => onChange(value, 'password')} value={password} onSubmitEditing={submit} placeholder="Password" placeholderTextColor={colors.mediumGray} secureTextEntry={true} autoCapitalize='none' autoCorrect={false} />
                        <Icon name="lock-closed" style={[bold, xl]} />
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={submit}>
                        <Text style={[{ color: 'white' }, { textAlign: 'center' }, lg, bold]}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.replace('Register')}>
                        <Text style={[{ color: colors.mediumGray }, { textAlign: 'center' },]}>Still without an account? <Text style={{ color: colors.boldYellow }}>Register</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: colors.lightGray,
        borderColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 13
    },
    input: {
        backgroundColor: 'transparent',
        fontSize: 15,
        width: '80%',
        marginRight: 15,
        padding: 0,
    },
    btn: {
        backgroundColor: colors.boldYellow,
        marginVertical: 40,
        paddingVertical: 10,
        borderRadius: 5,
    }
})
