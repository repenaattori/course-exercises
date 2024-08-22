import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <View style={Styles.container}>
      <SumView />
      <CurrencyView/>
    </View>
  );
}

/**
 * Calculate sum of two integers
 * Add all the necessary event handling for calculating the sum when pressing button
 * You may assure the number format in calculation using e.g. Number(num1)
 */
function SumView(){
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <View>
      <Text style={Styles.label}>Number 1:</Text>
      <TextInput 
        keyboardType='number-pad' 
        value={num1} 
        style={Styles.textInput}
        onChangeText={setNum1}
      />
      <Text style={Styles.label}>Number 2:</Text>
      <TextInput 
        keyboardType='number-pad' 
        value={num2}
        style={Styles.textInput}
        onChangeText={setNum2}
      />
      <Button title='Sum' onPress={() => setSum( Number(num1) + Number(num2) ) } />
      <Text style={Styles.result}>Sum is {sum}</Text>
    </View>
  );
}

/**
 * Create euros to pounds converter
 * JS uses . in decimal numbers.
 * You may replace comma given in UI with dot 
 * using e.g. let withoutComma = value.replace(',','.')
 * You may round the result to specific number of decimals by using e.g. result.toFixed(2) 
 */
function CurrencyView(){
  const [euros, setEuros] = useState(0);

  const eurosMod = euros.replace(',', '.');
  const result =  0.853* Number(eurosMod);

  return (
    <View>
      <Text>Euros:</Text>
      <TextInput style={Styles.textInput} onChangeText={setEuros} keyboardType='decimal-pad'/>
      <Text style={Styles.result}>{eurosMod}€ = {result.toFixed(2)}£</Text>

    </View>
  );
}
