import { Platform, Text } from "react-native"
import { CustomButton } from "../../components/Button/CustomButton"
import { styles } from "./OrdersScreen"
import notifee from '@notifee/react-native';
import { RouteProp } from "@react-navigation/native";
type OrdersScreenRouteParams = {
    role:string;
    username: string;
  
};
type OrdersScreenProps = {
    route: RouteProp<{ OrdersScreen: OrdersScreenRouteParams }, "OrdersScreen">;
};
export const OrdersScreen: React.FC<OrdersScreenProps> = ({ route }) => {
const { role,username } = route.params;
async function displayNotification(name: string) {
        await notifee.requestPermission()
        await notifee.displayNotification({
            title: 'Canteen App',
            body: `Hi ${name}  your order got placed!!!`,
        });
    }
    return (
        <>
            <Text>Display Orders!</Text>
            {role === "user" && (<CustomButton onPress={() => { displayNotification(username) }} title={"Place Order"} style={styles.button} />)}
        </>
    )
}