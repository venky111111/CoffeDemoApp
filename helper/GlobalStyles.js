import { StyleSheet } from "react-native"
import Colors from "./GlobalColors"

const GlobalStyles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
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
        fontSize: 17,
        textAlign:"center",
        fontFamily: "Sora_100Thin",        
      },
      title: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'Sora_600SemiBold'
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
        fontSize: 16

    },
    imageItem: {
      width: '100%',
      height: '50%',
      borderRadius: 10,
      marginBottom: 20,
      resizeMode: "cover",
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      fontSize: 14,
      color: '#666',
      marginRight: 4,
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
      buttonContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
        paddingHorizontal: 20,
    },
})

export default GlobalStyles