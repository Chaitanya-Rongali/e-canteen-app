import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import { loginScreenStyles } from "./LoginScreen"
import React from "react"
import {  RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/CanteenMenu";

export const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "LoginScreen">>();
    const route = useRoute<RouteProp<RootStackParamList, "LoginScreen">>();
    const role = route.params.role
    return (
        <View style={loginScreenStyles.container}>

            <Text style={loginScreenStyles.title}>{role === "admin" ? "Admin Login" : "User Login"}</Text>
            <Text style={loginScreenStyles.labelText}>User name:</Text>
            <View style={loginScreenStyles.inputView}>
                <TextInput placeholder="Please enter Username" />
            </View>
            <Text style={loginScreenStyles.labelText}>Password:</Text>
            <View style={loginScreenStyles.inputView}>
                <TextInput secureTextEntry placeholder="*********" />
            </View>
            <TouchableOpacity style={loginScreenStyles.loginBtn}>
                <Text>SIGN IN </Text>
            </TouchableOpacity>
            <Text> or sign in with</Text>
            <Text>Don't have an account?</Text>
            <Button title="Sign Up" onPress={() => navigation.navigate('RegistrationScreen', { role })} />
        </View>
    )
}