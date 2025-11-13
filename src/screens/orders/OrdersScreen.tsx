import { Platform, Text } from "react-native"
import { CustomButton } from "../../components/Button/CustomButton"
import { styles } from "./OrdersScreen"
import notifee from '@notifee/react-native';
import { RouteProp } from "@react-navigation/native";
type OrdersScreenRouteParams = {
    userName: string;
    admin: string;
    user: string;
};
type OrdersScreenProps = {
    route: RouteProp<{ OrdersScreen: OrdersScreenRouteParams }, "OrdersScreen">;
};
export const OrdersScreen: React.FC<OrdersScreenProps> = ({ route }) => {
    const { userName, admin, user } = route.params;

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
            {user === "user" && (<CustomButton onPress={() => { displayNotification(userName) }} title={"Place Order"} style={styles.button} />)}
        </>
    )
}