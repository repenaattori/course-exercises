import { StatusBar } from 'expo-status-bar';
import { Animated, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DATA from './Data';
import { useEffect, useRef, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function App() {

  const [users, setUsers] = useState(DATA);
  const [keyword, setKeyword] = useState('');
  const [selectedId, setSelectedId] = useState(null);


  //Filtteroidaan data aina hakusanan mukaisesti joka renderöinnillä
  const filtered = users.filter(u =>
    u.lname.toLowerCase().includes(keyword.toLowerCase())
  );

  //Funktio käyttäjän poistamiseen id:n perusteella
  function removeUser(id) {
    const modUsers = users.filter(p => p.id != id);
    setUsers(modUsers);
  }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder='search....'
        value={keyword}
        onChangeText={setKeyword}
      />
      <FlatList
        data={filtered}
        renderItem={({ item }) =>
          <Item
            item={item}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            remove={removeUser}
          />
        }
      />
    </View>
  );
}


function Item({ item, selectedId, setSelectedId, remove }) {

  //Animointiarvot borderille (valinta) ja poistamiselle
  const borderAnim = useRef(new Animated.Value(1)).current;
  const removeAnim = useRef(new Animated.Value(0)).current;

  const selected = selectedId == item.id;

  //Jos tämä id on valittu, maalataan oranssi taustavari
  const selectedStyle = selected ? { backgroundColor: 'orange' } : {}

  //Kun itemiä painetaa, käynnistetään borderin animointia ja samalla 
  //asetetaan valituksi (uudelleenrenreröinti tapahtuu samaan aikaan animoinnin kanssa)
  function pressed() {
    Animated.timing(borderAnim, {
      toValue: 4,
      duration: 400,
      useNativeDriver: false
    }).start();

    const id = selected ? null : item.id;
    setSelectedId(id);
  }

  //Kun poisto-nappia painetaan, tehdään ensin animaatio ja poistetaan itemi sitten listalta.
  function removeItem(){
    Animated.timing(removeAnim,{
      toValue: 250,
      duration: 200,
      useNativeDriver: false
    }).start(()=> remove(item.id));
  }

  //X ikoni näytetään vain jos tämä itemi valittu
  //ja ikonin painallus pyytää poistamaan itemin.

  return (
    <TouchableOpacity onPress={pressed}>
      <Animated.View style={[styles.itemview, selectedStyle, 
        { 
          borderWidth: borderAnim.interpolate({inputRange: [0,2,4], outputRange: [1, 3, 1]}),
          marginLeft: removeAnim
        }]}>
        <Text style={styles.itemtext}>{item.lname}</Text>
        {selected &&
          <FontAwesome
            style={styles.remove}
            name="remove" size={18}
            color="red"
            onPress={removeItem}
          />
        }
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    marginTop: 30
  },
  textinput: {
    borderWidth: 1,
    padding: 5,
    marginBottom: 10
  },
  itemview: {
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  itemtext: {
    fontSize: 26
  },
  remove: {
    position: 'absolute',
    top: 5,
    right: 5
  }
});
