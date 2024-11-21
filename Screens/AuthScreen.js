import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import BgImage from "../components/BgImage";
import ButtonComponent from "../components/ButtonComponent";
import Colors from "../helper/GlobalColors";
import GlobalStyles from "../helper/GlobalStyles";
import HorizentalLine from "../components/HorizentalLine";
import { logiUser } from "../helper/Auth";
import GoogleAuth from "../components/GoogleAuth";
import { AuthContext } from "../store/auth-context";
import LoadingOverlay from "../components/LoadingOverlay";

const AuthScreen = () => {
    const authCtx = useContext(AuthContext);
    const navigation = useNavigation();

    const [isAuth, setIsAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateFields = () => {
        let valid = true;

        if (!email.trim()) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Please enter a valid email');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            valid = false;
        } else {
            setPasswordError('');
        }

        return valid;
    };

    const handleClick = async () => {
        if (validateFields()) {
            setIsAuth(true);
            try {
                const res = await logiUser(email, password);
                console.log(res);
                
                if (res.idToken) {
                    authCtx.authenticate(res.idToken, res.displayName);
                    setEmail('');
                    setPassword('');
                } else {
                    Alert.alert("Login Failed", "Invalid credentials or server error.");
                }
            } catch (error) {
                console.error("Login error:", error);
                Alert.alert("Error", "An unexpected error occurred. Please try again.");
            } finally {
                setIsAuth(false);
            }
        }
    };

    if (isAuth) {
        return <LoadingOverlay message="Signing you in..." />;
    }

    return (
        <BgImage>
            <SafeAreaView style={GlobalStyles.container}>
                <Text style={GlobalStyles.welcomeText}>Welcome! Glad to see you Again!</Text>
                <BlurView intensity={65} tint="dark" style={GlobalStyles.blurContainer}>
                    <View style={GlobalStyles.textInputContainer}>
                        <Ionicons name="mail-sharp" size={24} color={Colors.color_6} style={GlobalStyles.icon} />
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="Please Enter your email"
                            placeholderTextColor="#777"
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>
                    {emailError && <Text style={{ color: 'red', fontSize: 12, marginBottom: 8 }}>{emailError}</Text>}

                    <View style={GlobalStyles.textInputContainer}>
                        <Ionicons name="lock-closed" size={24} color={Colors.color_6} style={GlobalStyles.icon} />
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="Please Enter your Password"
                            placeholderTextColor="#777"
                            onChangeText={setPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            value={password}
                        />
                    </View>
                    {passwordError && <Text style={{ color: 'red', fontSize: 12, marginBottom: 8 }}>{passwordError}</Text>}

                    <View style={GlobalStyles.button}>
                        <ButtonComponent onPress={handleClick} backgroundColor={Colors.color_1}>
                            Login
                        </ButtonComponent>
                    </View>
                </BlurView>

                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", marginVertical: 30 }}>
                    <HorizentalLine borderwidth={1} width={'40%'} color={Colors.color_5} />
                    <Text style={{ marginHorizontal: 4, fontFamily: 'Sora_600SemiBold', color: Colors.color_4 }}>OR</Text>
                    <HorizentalLine borderwidth={1} width={'40%'} color={Colors.color_5} />
                </View>

                <GoogleAuth>Login with Google</GoogleAuth>
                <Pressable style={{ marginTop: 40, paddingTop: 20, flexDirection: 'row' }} onPress={() => navigation.navigate("SignInScreen")}>
                    <Text style={[GlobalStyles.subText, { fontWeight: "bold" }]}>Don't have an account?</Text>
                    <Text style={[GlobalStyles.subText, { fontWeight: "bold", color: Colors.color_1 }]}> Sign Up Now</Text>
                </Pressable>
            </SafeAreaView>
        </BgImage>
    );
};

export default AuthScreen;
