import { useState } from "react";
import { Alert, Modal, Pressable, Text, TextInput, View } from "react-native";
import { modalStyles } from "./ItemModal";
import { ItemModalprops, menuItem, menuSection } from "../../types/CanteenMenu";
import { addMenuItems, fetchMenuItems } from "../../server";

const getModalTitle = (section: string) => {
  return `Add Item to ${section}`;
};
export const ItemModal: React.FC<ItemModalprops> = ({ modalVisible, onClose, title, SetMenuItems, menuItems }) => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const handleAddItem = async (title: string) => {
    console.log('name:', itemName)
    console.log('price:', price)
    if (!price || !itemName) {
      Alert.alert('Please Enter all values')
      return
    }
    if (Number(price) < 0 || isNaN(Number(price))) {
      Alert.alert("Amount must be postive")
      return
    }
    const section =menuItems.find((section)=>section.title===title);
    if(section){
      const repeatItem=section.data.some(item=>item.name.trim().toLowerCase()===itemName.trim().toLowerCase())
      if(repeatItem){
        Alert.alert("Item alerady exists your section")
        return;
      }
    }
    const newItem = {
      id: Math.random().toString(),
      name: itemName,
      cost: Number(price),
      image: '',
      sectionName: title, 
    };
    try{
    const updatedMenu = await addMenuItems(newItem, title);
    const newMenu= await fetchMenuItems();
  
   SetMenuItems(newMenu);
    }catch (error) {
    Alert.alert('Error adding item');
  }
  }

  return (

    <Modal testID="modal" animationType="slide" transparent={true} visible={modalVisible}>
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
            <Pressable style={modalStyles.AddButton} onPress={() => { handleAddItem(title) }}>
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