import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { CanteenMenu } from './src/screens/canteenMenu/CanteenMenu.tsx';
import HomeNavigation from './src/navigation/TabNavigation.tsx';
export default function App() {
  return (
    <SafeAreaProvider>
      < HomeNavigation/>
    </SafeAreaProvider>
  );
}

