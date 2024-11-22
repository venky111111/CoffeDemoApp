import React, { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import ButtonComponent from "./ButtonComponent";
import Colors from "../helper/GlobalColors";
import GlobalStyles from "../helper/GlobalStyles";
import { AuthContext } from "../store/auth-context";

const GoogleAuth = ({ children }) => {
    const authCtx = useContext(AuthContext);
    GoogleSignin.configure({
        webClientId: '362951433020-5a1s1mp07tf5c8kabp59r1rjhemugakf.apps.googleusercontent.com',
        offlineAccess: false
    });
    const [isAuth, setIsAuth] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        if (isAuth) {
            navigation.navigate("Loading");
        }
    }, [isAuth, navigation]);

    const handleGoogleLogin = async () => {
        setIsAuth(true); 
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const signInResult = await GoogleSignin.signIn();
            console.log(signInResult);;
            
            let idToken = signInResult.idToken;

            if (!idToken) {
                throw new Error('No ID token found');
            }

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            if (googleCredential) {
                console.log(signInResult);
                authCtx.authenticate(googleCredential, signInResult.user.name);
            }

            await auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.error(error);
        } finally {
            setIsAuth(false); // Resets after process
        }
    };

    return (
        <ButtonComponent
            onPress={handleGoogleLogin}
            backgroundColor={Colors.color_5}
            width={"90%"}
            textColor={Colors.color_3}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="logo-google" size={20} color={Colors.color_1} style={GlobalStyles.icon} />
                <Text style={{ fontWeight: "bold", marginLeft: 8 }}>{children}</Text>
            </View>
        </ButtonComponent>
    );
};

export default GoogleAuth;
