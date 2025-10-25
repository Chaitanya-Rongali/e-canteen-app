import React from 'react';
import { Text, View, SectionList, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DATA } from '../data/canteen-menu';
import { styles } from '../styles/canteen-menu';

export const CanteenMenu = () => (

  <SafeAreaView style={styles.container} edges={['top']}>
    <Text>EverestEnginering</Text>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>₹{item.cost}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>

);

export default CanteenMenu