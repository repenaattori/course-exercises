import { StyleSheet } from "react-native";
import Constants from "expo-constants";


export default StyleSheet.create({
    container: {
        flex:1,
        marginTop: Constants.statusBarHeight+10,
        padding: 30
    },
    switchRow:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        alignSelf: "flex-end"
    },
    switch:{
        alignSelf:"flex-start",
    },
    label:{
        fontWeight: 'bold'
    },
    textInput:{
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 20
    },
    button:{
        marginLeft: 30,
        marginRight: 30,
        padding: 5,
        textAlign: 'center',
        borderWidth: 1,
        fontWeight: 'bold'
    }
});
  



