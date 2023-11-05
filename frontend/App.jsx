import 'react-native-gesture-handler';
import 'expo-dev-client'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from "@gluestack-ui/config"
import Main from "./src/Main";
import GlobalState from './src/context/GlobalContext';


export default function App() {

  return (
    <GluestackUIProvider config={config}>
      <GlobalState>
        <Main />
      </GlobalState>
    </GluestackUIProvider>
  );
}