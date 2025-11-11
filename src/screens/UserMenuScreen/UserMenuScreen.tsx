import { Button, SafeAreaView, SectionList, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../canteenMenu/CanteenMenu"
import { loginScreenStyles } from "../LoginScreen/LoginScreen"
import { MenuItem } from "../../components/menuItem/MenuItem.tsx"
import { SetStateAction, useState } from "react"
import { menuSection } from "../../types/CanteenMenu.ts"
// import { DATA } from "../../data/CanteenMenu.ts"
import { SectionHeader } from "../../components/sectionHeader/SectionHeader.tsx"
import { UserMenuStyles } from "./UserMenuScreenStyles.ts"
import { ParamListBase, useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export const UserMenuScreen = () => {
    const [menuItems] = useState<menuSection[]>([])
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const handleDelete=()=>{
      handleDelete()
    }
    const SetMenuItems=()=>{
        SetMenuItems()
    }
    const hanldeLogout=()=>{
       navigation.navigate('WelcomeScreen')
    }
    return (
        <View>
            <View style={UserMenuStyles.headerContainer}>
                <Text style={UserMenuStyles.headerTitle}>Our Menu</Text>
                <TouchableOpacity style={UserMenuStyles.button} onPress={hanldeLogout}>
                    <Text style={UserMenuStyles.buttonText}>LogOut</Text>
                </TouchableOpacity>
            </View>
            <SectionList
                sections={menuItems}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({ item, section }) => <MenuItem item={item} handleDelete={handleDelete} sectionTitle={section.title} role="user" />}
                renderSectionHeader={({ section }) => (
                    <SectionHeader role="user" title={section.title} data={section.data} SetMenuItems={SetMenuItems} menuItems={menuItems} />
                )}
            />


        </View>
    )

}
export default UserMenuScreen;