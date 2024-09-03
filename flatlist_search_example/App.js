import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DATA from './Data';
import { useEffect, useState } from 'react';
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

  const selected = selectedId == item.id;

  //Jos tämä id on valittu, maalataan oranssi taustavari
  const selectedStyle = selected ? { backgroundColor: 'orange' } : {}

  //Kun itemiä painetaa, valitaan se tai poistetaan valinta, jos on jo valittuna.
  function pressed() {
    const id = selected ? null : item.id;
    setSelectedId(id);
  }

  //X ikoni näytetään vain jos tämä itemi valittu
  //ja ikonin painallus pyytää poistamaan itemin.

  return (
    <TouchableOpacity onPress={pressed}>
      <View style={[styles.itemview, selectedStyle]}>
        <Text style={styles.itemtext}>{item.lname}</Text>
        {selected &&
          <FontAwesome 
            style={styles.remove} 
            name="remove" size={18} 
            color="red" 
            onPress={()=> remove(item.id)}
          />
        }
      </View>
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
