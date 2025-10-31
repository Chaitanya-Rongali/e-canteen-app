import { ParamListBase, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import { loginScreenStyles } from "../LoginScreen/LoginScreen";
import { RootStackParamList } from "../../types/CanteenMenu";
export const RegistrationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "RegistrationScreen">>();
  const route = useRoute<RouteProp<RootStackParamList, "RegistrationScreen">>();
  const role = route.params.role
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
        <View style={loginScreenStyles.inputView}>
          <TextInput placeholder="Please enter Username"  value={username} onChangeText={(text) => setUsername(text)} />
        </View>
        <Text style={loginScreenStyles.labelText}>Password:</Text>
        <View style={loginScreenStyles.inputView}>
          <TextInput secureTextEntry placeholder="*********"  value={password} onChangeText={(text) => setPassword(text)} />
        </View>
        <Text style={loginScreenStyles.labelText}>ConfirmPassword:</Text>
        <View style={loginScreenStyles.inputView}>
          <TextInput secureTextEntry placeholder="*********" value={confirmpassword}  onChangeText={(text) => setConfirmpassword(text)}/>
        </View>
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