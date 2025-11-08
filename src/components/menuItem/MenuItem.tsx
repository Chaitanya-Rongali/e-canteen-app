import { Image, Pressable, Text, View } from "react-native"
import { Itemstyles } from "./MenuItem"
import { modalStyles } from "../itemModal/ItemModal"
import { MenuItemprops } from "../../types/CanteenMenu"
import { CustomButton } from "../Button/CustomButton"
export const MenuItem: React.FC<MenuItemprops> = ({ item, handleDelete, sectionTitle,role }) => {
    return (
        <View style={Itemstyles.item}>
            <Image source={{ uri: item.image }} style={Itemstyles.image} />
            <Text style={Itemstyles.title}>{item.name}</Text>
            <Text style={Itemstyles.title}>₹{item.cost}</Text>
            {role==="admin" ?<CustomButton style={modalStyles.cancelButton} onPress={() => handleDelete(sectionTitle, item.id)} title={"Delete"}/>:
            <CustomButton style={modalStyles.cancelButton} onPress={() => handleDelete(sectionTitle, item.id)} title={"Add"}/>}
        </View>
    )
}
