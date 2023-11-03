import 'react-native-gesture-handler';
import 'expo-dev-client'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from "@gluestack-ui/config"
import Main from "./src/Main";
import { UserContext } from './src/context/UserContext';
import { useState } from 'react';


export default function App() {
  const [user, setUser] = useState();
  return (
    <GluestackUIProvider config={config}>
      <UserContext.Provider value={{ user, setUser }}>
        <Main />
      </UserContext.Provider>
    </GluestackUIProvider>
  );
}