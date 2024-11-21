import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import useGlobalFonts from "../helper/GlobalFonts";
import Colors from "../helper/GlobalColors";
import GlobalStyles from "../helper/GlobalStyles";

function FlashScreen() {
    const navigation = useNavigation();
    const fontsLoaded = useGlobalFonts();

    if (!fontsLoaded) {
    }

    function screenChangeHandler() {
        navigation.navigate("AuthScreen");
    }

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: "https://img.freepik.com/premium-photo/cup-latte-art-is-shown-with-coffee-beans_1271802-14957.jpg" }} 
                style={styles.image} 
            />
            <View style={styles.adj} />
            <View style={styles.widther}>
                <Text style={GlobalStyles.welcomeText}>
                    Fall in Love with Coffee in Blissful Delight!
                </Text>
                <Text style={GlobalStyles.subText} >
                    Welcome to our cozy coffee corner, where every cup is a delightful for you.
                </Text>
            </View>
            <View style={styles.buttonContainer}>   
                <ButtonComponent onPress={screenChangeHandler} backgroundColor = {Colors.color_1}>Get Started</ButtonComponent>
            </View>
        </View>
    );
}

export default FlashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191515",
        alignItems: "center",
    },
    widther: {
        width: "75%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -55
    },

    image: {
        width: "100%",
        height: "70%",
    },
    adj: {
        marginHorizontal: 20,
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
        paddingHorizontal: 20,
    },
});
