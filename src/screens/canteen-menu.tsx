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
  return(
  <SafeAreaView style={styles.container} edges={['top']}>
    <Text style={styles.tittle}>EverestCanteen</Text>
    <SectionList
      sections={menuItems}
      keyExtractor={(item,index) => item.id+index}
      renderItem={({ item }) => <MenuItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} SetMenuItems={SetMenuItems} menuItems={menuItems}/>
      )}
    />
  </SafeAreaView>

)};

export default CanteenMenu