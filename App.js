import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return <>
    <StatusBar style='light' />
    <NativeRouter>
      <Main />
    </NativeRouter>
  </>
  {/* <TouchableNativeFeedback onPress={() => Alert.alert('Yes, te amo!')}>
        <Text>Elodie I love you</Text>
      </TouchableNativeFeedback> */}
}
