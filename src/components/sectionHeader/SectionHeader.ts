import { StyleSheet } from 'react-native';
export const headerstyles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF58a',
        padding: 10,
        borderRadius: 6,
    },
    headerTitle: {
        fontSize: 25,
        color: '#070505e3',
        fontWeight: 'bold',
    },
    button: {
        borderWidth: 2,
        borderColor: '#100dc7ff',
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,

    },

    buttonText: {
        color: '#100dc7ff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});