import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import Styles from './styles/Styles.js';

import { MaterialIcons } from '@expo/vector-icons';

const icons = [
  'ac-unit', 'adb',  'agriculture', 'alarm', 'animation', 'audiotrack',
  'auto-stories', 'beach-access', 'cake', 'camera', 'devices', 'face'
];

export default function App() {

  //States for messages and text input
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  
  //Adding new message as an object containing message text and random icon
  function add(){
    let ind = Math.floor(Math.random() * icons.length);
    setMessages( [...messages, {text: text, icon: icons[ind] }] );
  }

  return (
      <View style={Styles.container}>
        <TextInput style={Styles.textInput} value={text} onChangeText={setText}/>
        <Button title='Add' onPress={add} />
        <FlatList
          style={Styles.flatlist}
          data={messages}
          renderItem={Item}
        />
      </View>
  );
}

/**
 * Component for each item view.
 */
function Item({item}){
  return(
    <View style={Styles.item}>
      <Text>{item.text}</Text>
      <MaterialIcons name={item.icon} size={24}/>
    </View>
  );
}