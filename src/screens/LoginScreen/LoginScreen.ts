import { StyleSheet } from "react-native";

export const loginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'hsla(0, 0%, 100%, 1.00)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "rgba(17, 16, 16, 1)",
        marginBottom: 40,
        marginRight:40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "hsla(195, 3%, 69%, 1.00)",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    labelText: {
        marginRight: 190,
        fontSize: 20,
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "rgba(255, 144, 33, 1)",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    signin:{
        display:'flex',
        flexDirection: 'row'

    }



})