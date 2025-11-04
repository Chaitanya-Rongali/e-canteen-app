import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { AppNavigation } from './src/navigation/AppNavigation.tsx';
export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation/>
    </SafeAreaProvider>
  );
}

