import React from "react";
import {TouchableOpacity, Text, StyleSheet, ActivityIndicator} from "react-native";
type CustomButtonProps={
     onPress: () => void;
     title: string;
     style: {
    flex: number;
    backgroundColor: string;
    paddingVertical: number;
    borderRadius: number;
    marginLeft: number;
    alignItems: "center";
    width: number;
}
    }

export const CustomButton = ({onPress,title,style}:CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}  >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};



