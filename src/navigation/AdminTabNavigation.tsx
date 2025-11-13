import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CanteenMenuScreen } from "../screens/canteenMenu/CanteenMenu.tsx";
import { OrdersScreen } from "../screens/orders/OrdersScreen.tsx";
export type AdninTabParamList = {
  CanteenMenuScreen: () => React.JSX.Element
  OrdersScreen: { userName: string,admin:string, user:string  };
};

const Tab = createBottomTabNavigator<AdninTabParamList>();
export default function AdminTabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="CanteenMenuScreen" component={CanteenMenuScreen} />
            <Tab.Screen name="OrdersScreen" component={OrdersScreen} initialParams={{ userName: "Chaitanya",admin:"admin",user:"user" }} />
        </Tab.Navigator>

    );
}