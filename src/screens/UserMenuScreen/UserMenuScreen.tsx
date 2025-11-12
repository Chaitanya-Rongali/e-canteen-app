import { Alert, Button, Image, Pressable, SafeAreaView, SectionList, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../canteenMenu/CanteenMenu"
import { loginScreenStyles } from "../LoginScreen/LoginScreen"
import { MenuItem } from "../../components/menuItem/MenuItem.tsx"
import {  useState } from "react"
import { menuSection } from "../../types/CanteenMenu.ts"
import { DATA } from "../../data/CanteenMenu.ts"
import { SectionHeader } from "../../components/sectionHeader/SectionHeader.tsx"
import { UserMenuStyles } from "./UserMenuScreenStyles.ts"
import { launchImageLibrary } from "react-native-image-picker"
import { handleCameraPermission } from "../../Apppermissions/checkPerimissions.ts"


export const UserMenuScreen = () => {
    const image = "https://www.w3schools.com/howto/img_avatar.png"
    const [menuItems] = useState<menuSection[]>(DATA)
    const [profileimage, setProfileimage] = useState<any>(image)
    const handleDelete=()=>{
      handleDelete()
    }
    const SetMenuItems=()=>{
        SetMenuItems()
    }
    const handleProfilePress = async () => {
        const permission = await handleCameraPermission();
        if (permission === 'granted' || permission === 'limited') {
          launchImageLibrary({ mediaType: 'photo' }, (response) => {
            setProfileimage(response.assets?.at(0)?.uri);
          });
        } else {
          Alert.alert('Permission denied', 'Cannot change profile picture.');
        }
      };
    return (
        <View>
            <View style={UserMenuStyles.headerContainer}>
                <Pressable style={styles.profileContainer} onPress={handleProfilePress}>
                        {profileimage && <Image style={styles.profile} src={profileimage} />}</Pressable>
                <Text style={UserMenuStyles.headerTitle}>Our Menu</Text>
                <TouchableOpacity style={UserMenuStyles.button}>
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