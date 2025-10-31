import { Button, Pressable, Text, TouchableOpacity, View } from "react-native"
import { welcomeScreenStyles } from "./WelcomeScreen";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const WelcomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const handleLoginScreen = (role: 'user' | 'admin') => {
        navigation.navigate('LoginScreen', { role })
    }
    return (
        <View style={welcomeScreenStyles.container}>
            <Text>A CANTEEN JUST FOR YOU</Text>
            <Pressable style={welcomeScreenStyles.button} onPress={() => handleLoginScreen('user')} >
                <Text style={welcomeScreenStyles.buttonText}>LOGIN AS USER</Text>
            </Pressable>
            <TouchableOpacity style={welcomeScreenStyles.button} onPress={() => handleLoginScreen('admin')}>
                <Text style={welcomeScreenStyles.buttonText}>LOGIN AS ADMIN</Text>
            </TouchableOpacity>
            <Text>Welcome to Everest Canteen</Text>
        </View>

    )
}