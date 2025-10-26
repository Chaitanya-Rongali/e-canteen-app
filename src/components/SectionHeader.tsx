import { Button, Pressable, Text, View } from "react-native"
import { headerstyles } from "../styles/sectionheader"
import { useState } from "react"
import { ItemMOdal } from "./ItemModal"
import { menuSection } from "../types/canteen-menu"

type sectionHeader = {
    title: string
    SetMenuItems: React.Dispatch<React.SetStateAction<menuSection[]>>
    menuItems: menuSection[]
}



export const SectionHeader: React.FC<sectionHeader> = ({ title ,SetMenuItems,menuItems}) => {
     const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={headerstyles.headerContainer}>
            <Text style={headerstyles.headerTitle}>{title}</Text>
            <Pressable style={headerstyles.button} onPress={()=>setModalVisible(true)}>
        <Text style={headerstyles.buttonText}>Add</Text>
      </Pressable>
          <ItemMOdal modalVisible={modalVisible} onClose={()=>setModalVisible(false)} title={title} SetMenuItems={SetMenuItems} menuItems={menuItems}/>
          </View>  
      
        
    )
}