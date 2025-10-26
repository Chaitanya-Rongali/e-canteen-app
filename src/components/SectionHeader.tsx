import { Button, Pressable, Text, View } from "react-native"
import { headerstyles } from "../styles/sectionheader"
import { useState } from "react"
import { ItemMOdal } from "./ItemModal"

type sectionHeader = {
    title: string
}



export const SectionHeader: React.FC<sectionHeader> = ({ title }) => {
     const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={headerstyles.headerContainer}>
            <Text style={headerstyles.headerTitle}>{title}</Text>
            <Pressable style={headerstyles.button} onPress={()=>setModalVisible(true)}>
        <Text style={headerstyles.buttonText}>Add</Text>
      </Pressable>
          <ItemMOdal modalVisible={modalVisible} onClose={()=>setModalVisible(false)} title={title}/>
          </View>  
      
        
    )
}