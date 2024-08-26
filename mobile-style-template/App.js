import {  Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <View style={Styles.container}>
        <Text style={Styles.header}>Personal information</Text>
        <Text style={Styles.label}>First Name</Text>
        <TextInput style={Styles.textinput}/>
        <Text style={Styles.label}>Last Name</Text>
        <TextInput style={Styles.textinput}/>
        <TouchableOpacity onPress={()=>console.log("Submit")}>
          <Text style={Styles.button}>SUBMIT</Text>
        </TouchableOpacity> 
    </View>
  );
}

