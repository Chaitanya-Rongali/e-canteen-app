import {SafeAreaProvider,} from 'react-native-safe-area-context';
import CanteenMenu from './src/screens/canteen-menu';
import { Text } from 'react-native';





export default function App() {
  return (
    <SafeAreaProvider>
      <CanteenMenu/>
     </SafeAreaProvider>
  );
}

