import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CanteenMenuScreen } from "../screens/canteenMenu/CanteenMenu.tsx";
import { OrdersScreen } from "../screens/orders/OrdersScreen.tsx";
export type AdninTabParamList = {
  CanteenMenuScreen: () => React.JSX.Element
  OrdersScreen: { role:string,username:string };
};

const Tab = createBottomTabNavigator<AdninTabParamList>();
export default function AdminTabNavigation({route}:any) {
  const{role,username}=route.params
  
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="CanteenMenuScreen" component={CanteenMenuScreen} />
            <Tab.Screen name="OrdersScreen" component={OrdersScreen} initialParams={{ role:role,username:"Chaitanya" }} />
        </Tab.Navigator>

    );
}