import { StyleSheet, StatusBar } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  tittle: {
    textAlign: 'center',
    fontSize: 24,
    margin: 10,
  },
  profile:{
    width: '100%',
    height: '100%',
    },
  profileContainer:{
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }

});