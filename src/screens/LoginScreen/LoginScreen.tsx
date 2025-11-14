import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import { loginScreenStyles } from "./LoginScreen"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/CanteenMenu";

export const LoginScreen = ({ route }: any) => {
    const navigation = useNavigation<RootStackParamList>();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState("");
    const { role } = route.params
    const userName = "Ramesh"
    const Password = "1234"
    const handleLogin = (username: string, password: string, role: string) => {
        if (!username || !password) {
            Alert.alert("Please enter details before login!")
            return
        }
        if (role === "admin") {
            if (username === userName && password === Password) {
                return navigation.navigate('AdminTabNavigation', { role:role ,userName:"Chaitanya"})
            } else {
                return Alert.alert("Password or username is wrong")
            }
        } else {
            console.log(role);
            navigation.navigate('UserTabNavigation', { role:role,userName:"Chaitnya"})
        }

    }
return (
        <View style={loginScreenStyles.container}>

            <Text style={loginScreenStyles.title}>{role === "admin" ? "Admin Login" : "User Login"}</Text>
            <Text style={loginScreenStyles.labelText}>User name:</Text>
            <View style={loginScreenStyles.inputView}>
                <TextInput placeholder="Please enter Username" value={username} onChangeText={(text) => setUsername(text)} />
            </View>
            <Text style={loginScreenStyles.labelText}>Password:</Text>
            <View style={loginScreenStyles.inputView}>
                <TextInput secureTextEntry placeholder="*********" value={password} onChangeText={(text) => setPassword(text)} />
            </View>
            <TouchableOpacity style={loginScreenStyles.loginBtn} onPress={() => { handleLogin(username, password, role) }}>
                <Text>SIGN IN </Text>
            </TouchableOpacity>
            <Text> or sign in with</Text>
            <Text>Don't have an account?</Text>
            <Button title="Sign Up" onPress={() => navigation.navigate('RegistrationScreen', { role:role ,userName:"chaitanya"})} />

        </View>
    )
}