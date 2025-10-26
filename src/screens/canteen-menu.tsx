import React, { useState } from 'react';
import { Text, View, SectionList, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DATA } from '../data/canteen-menu';
import { styles } from '../styles/canteen-menu';
import { MenuItem } from '../components/MenuItem';
import { SectionHeader } from '../components/SectionHeader';
import { menuSection } from '../types/canteen-menu';

export const CanteenMenu = () => {
    const[menuItems,SetMenuItems]=useState<menuSection[]>(DATA)
  const handleDelete = (sectionTitle: string, id: string) => {
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
  return(
  <SafeAreaView style={styles.container} edges={['top']}>
    <Text style={styles.tittle}>Everest-Canteen👨‍🍳</Text>
    <SectionList
      sections={menuItems}
      keyExtractor={(item,index) => item.id+index}
      renderItem={({ item,section }) => <MenuItem item={item} handleDelete={handleDelete} sectionTitle={section.title}/>}
      renderSectionHeader={({ section }) => (
        <SectionHeader title={section.title} SetMenuItems={SetMenuItems} menuItems={menuItems} data={section.data}/>
      )}
    />
  </SafeAreaView>

)};

export default CanteenMenu