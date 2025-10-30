import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import { loginScreenStyles } from "../LoginScreen/LoginScreen";

export const RegistrationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <>
      <View style={loginScreenStyles.container}>
        <Text style={loginScreenStyles.title}> Create your account</Text>
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
        <Button title="Sign In" onPress={() => navigation.navigate('RegistrationScreen')} />
      </View>
    </>
  )
}