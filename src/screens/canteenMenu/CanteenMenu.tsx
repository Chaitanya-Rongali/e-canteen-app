import React from 'react';
import { Text, View, SectionList, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DATA } from '../../data/CanteenMenu';
import { styles } from './CanteenMenu';
import { MenuItem } from '../../components/menuItem/MenuItem.tsx';
import { SectionHeader } from '../../components/sectionHeader/SectionHeader.tsx';
const CanteenMenu = () => (
  <SafeAreaView style={styles.container} edges={['top']}>
    <Text style={styles.tittle}>EverestCanteen</Text>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => <MenuItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} />
      )}
    />
  </SafeAreaView>

);
export default CanteenMenu;