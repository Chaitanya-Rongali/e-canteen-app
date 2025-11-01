import { SafeAreaProvider, } from 'react-native-safe-area-context';
import HomeNavigation from './src/navigation/TabNavigation.tsx';
import { StackNavigation } from './src/navigation/StackNavigation.tsx';
export default function App() {
  return (
    <SafeAreaProvider>
      <StackNavigation/>
    </SafeAreaProvider>
  );
}

