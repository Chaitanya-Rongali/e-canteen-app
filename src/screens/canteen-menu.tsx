import React from 'react';
import { Text, View, SectionList, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DATA } from '../data/canteen-menu';
import { styles } from '../styles/canteen-menu';
import { MenuItem } from '../components/MenuItem';
import { SectionHeader } from '../components/SectionHeader';

export const CanteenMenu = () => (

  <SafeAreaView style={styles.container} edges={['top']}>
    <Text>EverestEnginering</Text>
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

export default CanteenMenu