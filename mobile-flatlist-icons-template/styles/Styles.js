import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
      
        alignItems: 'stretch',
        margin: 10,
        marginTop: 30
    },
    textInput:{
        padding: 5,
        borderWidth:1,
        marginBottom: 10
    },
    item:{
        flexDirection: 'row', 
        justifyContent:'space-between', 
        borderWidth: 1, 
        padding: 20, 
        margin:5,
        backgroundColor: 'white'
    },
    flatlist:{
        marginTop: 10,
        backgroundColor: '#ffc78f'
    }
});
  



