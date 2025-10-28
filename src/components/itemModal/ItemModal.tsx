import { useState } from "react";
import { Alert, Modal, Pressable, Text, TextInput, View } from "react-native";
import { modalStyles } from "./ItemModal";
import { ItemModalprops } from "../../types/CanteenMenu";

const getModalTitle = (section: string) => {
  return `Add Item to ${section}`;
};
export const ItemModal: React.FC<ItemModalprops> = ({ modalVisible, onClose, title, SetMenuItems, menuItems }) => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const handleAddItem = (title: string) => {
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
    const newItem = {
      id: Math.random().toString(),
      name: itemName,
      cost: Number(price),
      image: ''

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
            <Pressable style={modalStyles.AddButton}>
              <Text style={modalStyles.buttonText} onPress={() => { handleAddItem(title) }} >Add</Text>
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