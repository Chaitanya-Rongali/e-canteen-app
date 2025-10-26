import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { modalStyles } from "../styles/ItemModal";


type ItemModalprops={
    modalVisible: boolean,
    onClose: () => void;
    title: string
}
const getModalTitle = (section: string) => {
    return `Add Item to ${section}`;
};


export const ItemMOdal:React.FC<ItemModalprops>=({modalVisible,onClose,title })=>{
    const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
    return(
        
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={modalStyles.modal}>
        <View style={modalStyles.modalContainer}>
        <Text style={modalStyles.modalTitle}>{getModalTitle(title)}</Text>
            <TextInput
            style={modalStyles.input}
            placeholder="Item Name"
            value={itemName}
            onChangeText={setItemName}
          />
          <TextInput
            style={modalStyles.input}
            placeholder="Price"
            value={price}
            keyboardType="numeric"
            onChangeText={setPrice}
          />
          <View style={modalStyles.modalButtons}>
            <Pressable style={modalStyles.AddButton}>
              <Text style={modalStyles.buttonText}>Add</Text>
            </Pressable>
            <Pressable style={modalStyles.cancelButton} onPress={onClose}>
              <Text style={modalStyles.buttonText}>Cancel</Text>
            </Pressable>
            </View>   
            </View> 
            </View> 
        
        </Modal>
        
        
    )
}