import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {WelcomeScreen} from "../screens/welcomeScreen/WelcomeScreen.tsx"
import { RegistrationScreen } from "../screens/RegistarationScreen/RegistrationScreen.tsx";
import {LoginScreen} from "../screens/LoginScreen/LoginScreen.tsx"

import React from "react";


const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen"  >
        <Stack.Screen name="WelcomeScreen"  component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="LoginScreen"  component={LoginScreen}  />
        <Stack.Screen name="RegistrationScreen"  component={RegistrationScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};