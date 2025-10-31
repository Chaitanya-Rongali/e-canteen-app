import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import { loginScreenStyles } from "../LoginScreen/LoginScreen";
import { RootStackParamList } from "../../types/CanteenMenu";
export const RegistrationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "RegistrationScreen">>();
  const route = useRoute<RouteProp<RootStackParamList, "RegistrationScreen">>();
  const role = route.params.role
  return (
    <>
      <View style={loginScreenStyles.container}>
        <Text style={loginScreenStyles.title}>{role === "admin" ? "Create account for admin" : "Create account for user "} </Text>
        <Text style={loginScreenStyles.labelText}>User name:</Text>
        <View style={loginScreenStyles.inputView}>
          <TextInput placeholder="Please enter Username" />
        </View>
        <Text style={loginScreenStyles.labelText}>Password:</Text>
        <View style={loginScreenStyles.inputView}>
          <TextInput secureTextEntry placeholder="*********" />
        </View>
        <Text style={loginScreenStyles.labelText}>ConfirmPassword:</Text>
        <View style={loginScreenStyles.inputView}>
          <TextInput secureTextEntry placeholder="*********" />
        </View>
        <TouchableOpacity style={loginScreenStyles.loginBtn}>
          <Text>SIGN UP </Text>
        </TouchableOpacity>
        <Text> or sign in with</Text>
        <Text>Don't have an account?</Text>
        <Button title="Sign In" onPress={() => navigation.navigate('LoginScreen', { role })} />
      </View>
    </>
  )
}