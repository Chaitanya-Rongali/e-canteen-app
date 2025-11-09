import React, { useEffect, useState } from 'react';
import { Text, View, SectionList, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DATA } from '../../data/CanteenMenu';
import { styles } from './CanteenMenu';
import { menuSection } from '../../types/CanteenMenu.ts';
import { MenuItem } from '../../components/menuItem/MenuItem.tsx';
import { SectionHeader } from '../../components/sectionHeader/SectionHeader.tsx';
import { deleteMenuItem, fetchMenuItems } from '../../server.ts';


export const CanteenMenuScreen:React.FC = () => {
  const [menuItems, SetMenuItems] = useState<menuSection[]>(DATA)

  useEffect(() => {
    const getMenuItems= async()=>{
    try{
   const data= await fetchMenuItems()
   SetMenuItems(data);
 }catch{
      console.error('Error fetching menu items');
}
  };
},[]);
  const handleDelete = async (sectionTitle: string, id: string) => {
    await deleteMenuItem(id)
    const updatedSections = menuItems.map(section => {
      if (section.title === sectionTitle) {
        return {
          ...section,
          data: section.data.filter(item => item.id !== id),
        };
      }
      return section;
    });
    SetMenuItems(updatedSections);
  }
  

  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.tittle}>Everest-Canteen👨‍🍳</Text>
      <SectionList
        sections={menuItems}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item, section }) => <MenuItem item={item} handleDelete={handleDelete} sectionTitle={section.title} role={'admin'} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} SetMenuItems={SetMenuItems} menuItems={menuItems} data={section.data} role={'admin'} />
        )}
      />
    </SafeAreaView>

  );
}

