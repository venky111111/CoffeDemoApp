import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function ButtonComponent({ children, onPress, backgroundColor,width = '100%', textColor="white"}) {
  return ( 
    <View style={[styles.buttonContainer]}>
      <TouchableOpacity 
        style={[styles.loginButton, {backgroundColor: backgroundColor,width: width }]} 
        onPress={onPress} 
        activeOpacity={0.7}
      >
        <Text style={[styles.loginText, {color: textColor}]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ButtonComponent;

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
    
  },
});
