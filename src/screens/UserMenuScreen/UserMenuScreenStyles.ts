import { StyleSheet } from "react-native";

export const UserMenuStyles=StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
    },
     headerTitle: {
        fontSize: 25,
        color: '#070505e3',
        fontWeight: 'bold',
    },
    button: {
        borderWidth: 2,
       backgroundColor: '#c7980dff',
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,

    },

    buttonText: {
        color: 'rgba(12, 12, 13, 1)',
        
        fontSize: 16,
    },
})