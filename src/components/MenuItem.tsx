import { Image, Text, View } from "react-native"
import { menuItem } from "../types/canteen-menu"
import { Itemstyles } from "../styles/menuItem"
type MenuItem = {
    item: menuItem
}
export const MenuItem: React.FC<MenuItem> = ({ item }) => {
    return (
        <View style={Itemstyles .item}>
            <Image source={item.image} style={Itemstyles .image} />
            <Text style={Itemstyles .title}>{item.name}</Text>
            <Text style={Itemstyles .title}>₹{item.cost}</Text>
        </View>
    )
}