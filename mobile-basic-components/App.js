import { ScrollView, View } from 'react-native';
import Logo from './components/Logo.js';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <ScrollView>
      <View style={Styles.container}>
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
      </View>
    </ScrollView>
  );
}

