import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import ButtonComponent from "./ButtonComponent";
import Colors from "../helper/GlobalColors";
import GlobalStyles from "../helper/GlobalStyles";
import LoadingOverlay from "./LoadingOverlay";
import { AuthContext } from "../store/auth-context";

const GoogleAuth = ({ children }) => {

    const authCtx = useContext(AuthContext)
    GoogleSignin.configure({
        webClientId: '362951433020-5a1s1mp07tf5c8kabp59r1rjhemugakf.apps.googleusercontent.com',
      });
    const [isAuth, setIsAuth] = useState(false);
    const navigation = useNavigation(); 

    const handleGoogleLogin = async () => {
        setIsAuth(true);
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const signInResult = await GoogleSignin.signIn();
        idToken = signInResult.data?.idToken;
        if (!idToken) {
            idToken = signInResult.idToken;
        }
        if (!idToken) {
            throw new Error('No ID token found');
        }
        const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.idToken);

        if(googleCredential){
            console.log(signInResult);
            authCtx.authenticate(googleCredential, signInResult.data.user.name);
        }

        setIsAuth(false);
        return auth().signInWithCredential(googleCredential);
    };

    if (isAuth) {
        return navigation.navigate("Loading");
    }

    return (
        <ButtonComponent onPress={handleGoogleLogin} backgroundColor={Colors.color_5} width={"90%"} textColor={Colors.color_3}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="logo-google" size={20} color={Colors.color_1} style={GlobalStyles.icon} />
                <Text style={{ fontWeight: "bold", marginLeft: 8 }}>{children}</Text>
            </View>
        </ButtonComponent>
    );
};

export default GoogleAuth;
