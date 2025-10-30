
import { StyleSheet } from "react-native";

export const welcomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 144, 33, 1)", 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 20,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10, 
    width: "80%", 
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },

});
