import { Image, Text, View } from "react-native"
import { styles } from "../styles/canteen-menu"
import { menuItem } from "../types/canteen-menu"
type MenuItem = {
    item: menuItem
}
export const MenuItem: React.FC<MenuItem> = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.title}>₹{item.cost}</Text>
        </View>
    )
}