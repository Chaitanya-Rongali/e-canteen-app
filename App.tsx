import { SafeAreaProvider, } from 'react-native-safe-area-context';
import CanteenMenu from './src/screens/CanteenMenu';
export default function App() {
  return (
    <SafeAreaProvider>
      <CanteenMenu />
    </SafeAreaProvider>
  );
}

