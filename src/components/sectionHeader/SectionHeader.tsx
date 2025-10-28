import { Button, Pressable, Text, View } from "react-native"
import { headerstyles } from "./SectionHeader"
import { useState } from "react"
import { ItemModal } from "/Users/chaithu/Documents/CanteenApp/src/components/itemModal/ItemModal.tsx"
import { menuSection, sectionHeader } from "../../types/CanteenMenu"
export const SectionHeader: React.FC<sectionHeader> = ({ title, SetMenuItems, menuItems, data }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={headerstyles.headerContainer}>
            <Text style={headerstyles.headerTitle}>{title}</Text>
            <Text>Count:{data.length}</Text>
            <Pressable style={headerstyles.button} onPress={() => setModalVisible(true)}>
                <Text style={headerstyles.buttonText}>Add</Text>
            </Pressable>
            <ItemModal modalVisible={modalVisible} onClose={() => setModalVisible(false)} title={title} SetMenuItems={SetMenuItems} menuItems={menuItems} />
        </View>


    )
}