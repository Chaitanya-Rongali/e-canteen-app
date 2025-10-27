import { Image, Text, View } from "react-native"
import { Itemstyles } from "./MenuItem"
import { MenuItemProps } from "../../types/CanteenMenu"
export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    return (
        <View style={Itemstyles.item}>
            <Image source={item.image} style={Itemstyles.image} />
            <Text testID="name" style={Itemstyles.title}>{item.name}</Text>
            <Text testID="cost" style={Itemstyles.title}>₹{item.cost}</Text>
        </View>
    )
}