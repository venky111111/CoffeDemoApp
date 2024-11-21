import { StatusBar } from 'expo-status-bar';
import MainNavigator from './components/MainNavigator';
import 'expo-dev-client';
import AuthContextProvider from './store/auth-context';

export default function App() {
  return (
   <>
    <AuthContextProvider>
      <StatusBar style="light" />
      <MainNavigator/>
      </AuthContextProvider>
   </>
  );
}
