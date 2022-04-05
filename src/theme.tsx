import { StyleSheet } from 'react-native';

export const colors = {
    lightGray: '#fafcfd',
    mediumGray: '#aaaaaa',
    mediumBlack: '#202020',
    mediumYellow: '#ffd980',
}

export const theme = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        flex: 1,
        justifyContent: 'space-between'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    light: {
        fontWeight: '300'
    },
    normal: {
        fontWeight: '500'
    },
    bold: {
        fontWeight: '700'
    },
    xs:{
        fontSize: 12
    },
    base:{
        fontSize: 15
    },
    lg:{
        fontSize: 18
    },
    xl:{
        fontSize: 20
    },
    _2xl:{
        fontSize: 24
    },
    _3xl:{
        fontSize: 30
    },
})