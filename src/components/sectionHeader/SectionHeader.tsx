import { Button, Pressable, Text, View } from "react-native"
import { headerstyles } from "./SectionHeader"
import { useState } from "react"
import { sectionHeader } from "../../types/CanteenMenu"
export const SectionHeader: React.FC<sectionHeader> = ({ title }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={headerstyles.headerContainer}>
            <Text testID='title' style={headerstyles.headerTitle}>{title}</Text>
            <Pressable style={headerstyles.button} onPress={() => setModalVisible(true)}>
                <Text style={headerstyles.buttonText} id="Add">Add</Text>
            </Pressable>
        </View>

    )
}