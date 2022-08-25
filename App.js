import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'


export default function App() {
  return <NativeRouter>
    <Main />
  </NativeRouter>
  {/* <TouchableNativeFeedback onPress={() => Alert.alert('Yes, te amo!')}>
        <Text>Elodie I love you</Text>
      </TouchableNativeFeedback> */}
}
