import React, { useState } from 'react';
import { Text, View, SectionList, Image, Alert, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DATA } from '../../data/CanteenMenu';
import { styles } from './CanteenMenu';
import { menuSection } from '../../types/CanteenMenu.ts';
import { MenuItem } from '../../components/menuItem/MenuItem.tsx';
import { SectionHeader } from '../../components/sectionHeader/SectionHeader.tsx';
import { launchImageLibrary } from 'react-native-image-picker';
import { handleCameraPermission } from '../../Apppermissions/checkPerimissions.ts';


export const CanteenMenuScreen = () => {
  const image = "https://www.w3schools.com/howto/img_avatar.png"
  const [menuItems, SetMenuItems] = useState<menuSection[]>(DATA)
  const [profileimage, setProfileimage] = useState<any>(image)
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
  const handleProfilePress = async () => {
    const permission = await handleCameraPermission();
    if (permission === 'granted' || permission === 'limited') {
      launchImageLibrary({ mediaType: 'photo' }, (response) => {
        setProfileimage(response.assets?.at(0)?.uri);
      });
    } else {
      Alert.alert('Permission denied', 'Cannot change profile picture.');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
    <Pressable style={styles.profileContainer} onPress={handleProfilePress}>
        {profileimage && <Image style={styles.profile} src={profileimage} />}</Pressable>
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

