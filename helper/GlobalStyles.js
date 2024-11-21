import { StyleSheet } from "react-native"
import Colors from "./GlobalColors"

const GlobalStyles = StyleSheet.create({
    button: {
        width: '100%',
      },
      container: {
          flex: 1,
          backgroundColor: 'rgba(60, 59, 59, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        },
  
      welcomeText: {
        color: Colors.color_5,
        fontSize: 32,
        textAlign:"center",
        fontFamily: "Sora_600SemiBold", 
        marginBottom: 15,
      },
      nameText: {
        color: Colors.color_5,
        fontSize: 15,
        textAlign:"center",
        fontFamily: "Sora_600SemiBold", 
       
      },
      blurContainer: {
        borderRadius: 12,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        overflow: 'hidden', 
      },
      subText :{
        marginHorizontal: 4,
        textAlign: "center",
        color: Colors.color_4,
        fontFamily: "Sora_100Thin", 
        marginBottom: 20,
        fontSize: 15

    },
    card: {
        backgroundColor: Colors.color_1,
        width: '85%',
        borderRadius: 12
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 10,
        marginTop: 5,
        fontFamily: 'Sora_600SemiBold'
    },
    
      textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 15,
        width: '100%',
        backgroundColor: Colors.color_5, 
      },
      icon: {
        marginRight: 8,
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },
      imageContainer: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: -60
         
      },
      imageContainer2: {
        flex: 1,
        marginHorizontal: 15,
        borderRadius: 10,
        overflow: 'hidden'
      },
      image: {
        width: '100%',
        height: '100%',
    
      },
})

export default GlobalStyles