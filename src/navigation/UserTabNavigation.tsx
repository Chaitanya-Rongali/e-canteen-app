import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserMenuScreen from "../screens/UserMenuScreen/UserMenuScreen";
import { OrdersScreen } from "../screens/orders/OrdersScreen.tsx";

export type UserTabParamList = {
  UserMenuScreen: () => React.JSX.Element
  OrdersScreen: { userName: string,admin:string, user:string};
};


const Tab = createBottomTabNavigator<UserTabParamList>();
export const UserTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="UserMenuScreen" component={UserMenuScreen} />
            <Tab.Screen name="OrdersScreen" component={OrdersScreen}  initialParams={{ userName: "Chaitanya",admin:"admin",user:"user" }}/>
        </Tab.Navigator>

    );
}