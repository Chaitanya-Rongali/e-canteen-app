import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { modalStyles } from "../styles/ItemModal";
import { DATA } from "../data/canteen-menu";
import { menuSection } from "../types/canteen-menu";

type ItemModalprops={
    modalVisible: boolean,
    onClose: () => void;
    title: string
   SetMenuItems: React.Dispatch<React.SetStateAction<menuSection[]>>
   menuItems: menuSection[]
}
const getModalTitle = (section: string) => {
    return `Add Item to ${section}`;
};


export const ItemMOdal:React.FC<ItemModalprops>=({modalVisible,onClose,title, SetMenuItems,menuItems })=>{
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
  const handleAddItem=(title:string)=>{
    console.log('name:',itemName)
    console.log('price:',price)
    const newItem = {
      id: Math.random().toString(),
      name: itemName,
      cost: Number(price),
      image:''
      
    };
    const updatedMenu = menuItems.map((section) => {
      if (section.title === title) {
        return {
          ...section,
          data: [...section.data, newItem],
        };
      }
      return section;
    });
    SetMenuItems(updatedMenu);
    setItemName("");
    setPrice("");
    onClose();
}

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
              <Text style={modalStyles.buttonText} onPress={()=>{handleAddItem(title)}} >Add</Text>
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