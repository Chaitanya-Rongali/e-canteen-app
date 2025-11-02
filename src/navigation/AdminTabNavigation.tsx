import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CanteenMenuScreen } from "../screens/canteenMenu/CanteenMenu.tsx";
import { OrdersScreen } from "../screens/orders/OrdersScreen.tsx";

const Tab = createBottomTabNavigator();
export default function AdminTabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="CanteenMenu" component={CanteenMenuScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
        </Tab.Navigator>

    );
}