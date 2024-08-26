import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({
    container: {
        margin: 10,
        marginTop: Constants.statusBarHeight+5,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fec17f',
        padding: 10
    },
    header:{
        fontSize: 26,
        color: '#693402',
        fontWeight: "bold"
    },
    label: {
        marginLeft: 10,
        marginRight: 10,
        color: '#693402',
        marginTop: 10
    },
    textinput: {
        borderWidth: 1,
        padding: 5,
        marginLeft: 10,
        borderRadius: 5,
        marginRight: 10
    },
    button: {
        borderWidth: 1,
        margin: 10,
        backgroundColor: '#3d2000',
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: "center",
        borderRadius: 5,
        padding: 5
    }
});
  



