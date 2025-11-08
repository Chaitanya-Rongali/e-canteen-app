import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserMenuScreen from "../screens/UserMenuScreen/UserMenuScreen";
import { OrdersScreen } from "../screens/orders/OrdersScreen";

const Tab = createBottomTabNavigator();
export const UserTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="UserMenuScreen" component={UserMenuScreen} />
            <Tab.Screen name="OrdersScreen" component={OrdersScreen} />
        </Tab.Navigator>

    );
}