import { Button, Image, Text, View } from 'react-native';
import music from '../assets/band.png';

export default function Logo(){
    return(
        <View>
            <Text>Amazing music services</Text>
            <Image source={music}/>
            <Button title='Register'/>
        </View>
    );
}