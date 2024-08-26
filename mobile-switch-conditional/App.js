import {  Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles.js';
import { useState } from 'react';

export default function App() {

  const [register, setRegister] = useState(false);
  
  const buttonText = register ? 'Register' : 'Login';

  return (
    <View style={Styles.container}>
      <View style={Styles.switchRow}>
        <Text>Login/Register</Text>
        <Switch value={register} onValueChange={setRegister}/>
      </View>
      { register && <FormInput label='First name'/> }
      { register && <FormInput label='Last name'/> }
      <FormInput label={'Email'}/>
      <FormInput label={'Password'} isPw={true}/>
      <TouchableOpacity>
        <Text style={Styles.button}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

function FormInput({label, isPw}){
  return(
    <View>
      <Text style={Styles.label}>{label}</Text>
      <TextInput secureTextEntry={isPw} style={Styles.textInput}/>
    </View>
  )
}
