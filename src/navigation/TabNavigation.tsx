import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CanteenMenu } from "../screens/canteenMenu/CanteenMenu.tsx";
import { Orders } from "../components/orders/orders";

const Tab = createBottomTabNavigator();
export default function HomeNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CanteenMenu" component={CanteenMenu} />
        <Tab.Screen name="Orders" component={Orders} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}