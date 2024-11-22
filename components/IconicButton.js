import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Colors from "../helper/GlobalColors";

function OutlinedButton({ onPress, icon, children, outline }) {
    return (
        <Pressable 
            style={({ pressed }) => [
                style.button, 
                outline ? style.outlined : style.filled, 
                pressed && style.pressed
            ]}
            onPress={onPress}
        >
            <Ionicons style={[{fontWeight: 'bold', marginRight:children ? 4 : 0 } ]} name={icon} size={22} color={outline ? Colors.color_1 : Colors.color_5} />
            {children && (
                <Text style={[style.text, { color: outline ? Colors.color_1 : Colors.color_5 }]}>
                    {children}
                </Text>
            )}
        </Pressable>
    );
}

export default OutlinedButton;

const style = StyleSheet.create({
    button: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        marginVertical: 15,
        textAlign: 'center', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',  
        borderRadius: 10,
        width: 'auto', 
    },
    outlined: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.color_2,
    },
    filled: {
        backgroundColor: Colors.color_1,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.color_1,
    },
    pressed: {
        opacity: 0.7,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', 
    }
});
