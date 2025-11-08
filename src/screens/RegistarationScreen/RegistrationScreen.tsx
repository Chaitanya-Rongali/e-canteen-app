import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import { loginScreenStyles } from "../LoginScreen/LoginScreen";
import {  RegistarationScreenRouteProp, RootStackParamList } from "../../types/CanteenMenu"
import { CustomInput } from "../../components/InputFiled/CustomInput";
export const RegistrationScreen = ({ route }: { route:RegistarationScreenRouteProp }) => {
  const navigation = useNavigation<RootStackParamList>();
  const {role} = route.params
   const [username, setUsername] = useState("");
	 const [password, setPassword] = useState("");
   const[confirmpassword,setConfirmpassword]=useState('')
  const handleSignup=()=>{
    if(!username || !password || !confirmpassword){
      return Alert.alert('Please enter all details')
    }
    if(password!=confirmpassword){
      return Alert.alert('Paswords do not match')
    }
   
  }

  return (
    <>
      <View style={loginScreenStyles.container}>
        <Text style={loginScreenStyles.title}>{role === "admin" ? "Create account for admin" : "Create account for user "} </Text>
        <Text style={loginScreenStyles.labelText}>User name:</Text>
        <CustomInput style={loginScreenStyles.inputView} placeholder="Please enter Username"  value={username} onChangeText={(text) => setUsername(text)} />
        <Text style={loginScreenStyles.labelText}>Password:</Text>
        <CustomInput style={loginScreenStyles.inputView} secureTextEntry placeholder="*********"  value={password} onChangeText={(text) => setPassword(text)} />
       <Text style={loginScreenStyles.labelText}>ConfirmPassword:</Text>
        <CustomInput style={loginScreenStyles.inputView} secureTextEntry placeholder="***********" value={confirmpassword}  onChangeText={(text) => setConfirmpassword(text)}/>
        <TouchableOpacity style={loginScreenStyles.loginBtn} onPress={()=>{handleSignup()}}>
        <Text>SIGN UP </Text>
        </TouchableOpacity>
        <Text> or sign in with</Text>
        <Text>Don't have an account?</Text>
        <Button title="Sign In" onPress={() => navigation.navigate('LoginScreen', { role })} />
      </View>
    </>
  )
}