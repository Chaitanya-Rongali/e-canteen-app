import { Image, Pressable, Text, View } from "react-native"
import { Itemstyles } from "./MenuItem"
import { modalStyles } from "../itemModal/ItemModal"
import { MenuItemprops } from "../../types/CanteenMenu"
export const MenuItem: React.FC<MenuItemprops> = ({ item, handleDelete, sectionTitle }) => {
    return (
        <View style={Itemstyles.item}>
            <Image source={{ uri: item.image }} style={Itemstyles.image} />
            <Text style={Itemstyles.title}>{item.name}</Text>
            <Text style={Itemstyles.title}>₹{item.cost}</Text>
            <Pressable style={modalStyles.cancelButton} onPress={() => handleDelete(sectionTitle, item.id)}>
                <Text>Delete</Text>
            </Pressable>
        </View>
    )
}
