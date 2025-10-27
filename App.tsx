import { SafeAreaProvider, } from 'react-native-safe-area-context';
import CanteenMenu from './src/screens/canteenMenu/CanteenMenu';
export default function App() {
  return (
    <SafeAreaProvider>
      <CanteenMenu />
    </SafeAreaProvider>
  );
}

