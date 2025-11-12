import React, { useEffect, useState } from 'react';
import { Text, View, SectionList, Image, Button, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// import { DATA } from '../../data/CanteenMenu';
import { styles } from './CanteenMenu';
import { menuItem, menuSection } from '../../types/CanteenMenu.ts';
import { MenuItem } from '../../components/menuItem/MenuItem.tsx';
import { SectionHeader } from '../../components/sectionHeader/SectionHeader.tsx';
import { deleteMenuItem, fetchMenuItems } from '../../server.ts';
import { handleCameraPermission } from '../../permissions/checkPremissions.ts';
import { launchImageLibrary } from 'react-native-image-picker';




export const CanteenMenuScreen: React.FC = () => {
  const [menuItems, SetMenuItems] = useState<menuSection[]>([])
  const [profileimage, setProfileimage] = useState<string>()

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const data = await fetchMenuItems();
        const grouped: { [key: string]: menuItem[] } = {};
        data.forEach((item: menuItem) => {
          if (!grouped[item.sectionName]) {
            grouped[item.sectionName] = [];
          }
          grouped[item.sectionName].push(item);
        });

        const sections: menuSection[] = Object.keys(grouped).map(title => ({
          title,
          data: grouped[title],
        }));
        SetMenuItems(sections);

      } catch {
        console.error('Error fetching menu items');
      }
    };
    getMenuItems();
  }, []);


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
      <Pressable style={styles.profileContainer}
        onPress={() => {
          handleCameraPermission();launchImageLibrary({ mediaType: "photo" }, (response) => {
            setProfileimage(response.assets?.at(0)?.uri)
          })
         }}
      >{profileimage && <Image style={styles.profile} src={profileimage} />}</Pressable>
      <Text style={styles.tittle}>Everest-Canteen👨‍🍳</Text>
      <SectionList
        sections={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, section }) => <MenuItem item={item} handleDelete={handleDelete} sectionTitle={section.title} role={'admin'} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} SetMenuItems={SetMenuItems} menuItems={menuItems} data={section.data} role={'admin'} />
        )}
      />

    </SafeAreaView>

  );
}


