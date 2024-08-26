import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.logoArea}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.header}>WELCOME</Text>
          <Image source={logo} style={styles.logo}/>
        </View>
      </View>
      <View style={styles.bottomBiew}>
        <Text style={styles.header}>Upper header</Text>
        <Text style={styles.header}>Middle header</Text>
        <Text style={styles.header}>Bottom header</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9e65'
  },
  logo: {
    height: 50,
    width: 50
  },
  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9e65'
  },
  bottomBiew:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ff7627',
    borderWidth: 2,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70 ,
  },
  header:{
    fontSize: 36,
    padding: 15,
    color: 'white',
    fontWeight: 'bold'
  }
});
