import { Text, TextInput, View } from "react-native"
import { CustomInputProps } from "../../types/CanteenMenu"


export const CustomInput:React.FC<CustomInputProps> =({value,placeholder,onChangeText,secureTextEntry=false,style})=>{
    return(
        <View style={style}>
           <TextInput placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry} value={value}/>
        </View>
    )
}