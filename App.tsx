import { SafeAreaProvider, } from 'react-native-safe-area-context';
import HomeNavigation from './src/navigation/TabNavigation.tsx';
export default function App() {
  return (
    <SafeAreaProvider>
      < HomeNavigation/>
    </SafeAreaProvider>
  );
}

