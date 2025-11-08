import React from "react";
import {TouchableOpacity, Text, StyleSheet, ActivityIndicator} from "react-native";
import { CustomButtonProps } from "../../types/CanteenMenu";


export const CustomButton = ({onPress,title,style}:CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}  >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};



