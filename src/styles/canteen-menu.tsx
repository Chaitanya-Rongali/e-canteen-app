import {StyleSheet,StatusBar} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  tittle:{
    textAlign:'center',
    fontSize:24,
    margin:10,
  },
});