import BgImage from "../components/BgImage";
import { Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import Colors from "../helper/GlobalColors";
import GlobalStyles from "../helper/GlobalStyles";
import HorizentalLine from "../components/HorizentalLine";
import { createUser } from "../helper/Auth";
import LoadingOverlay from "../components/LoadingOverlay";
import GoogleAuth from "../components/GoogleAuth";
import { AuthContext } from "../store/auth-context";

const SignInScreen = () => {
    const authCtx = useContext(AuthContext)
    useEffect(() => {
        if (authCtx.isAuthenticated) {
          navigation.navigate("HomeScreen");
        }
      }, [authCtx.isAuthenticated, navigation]);

    const [isAuth, setIsAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
    const navigation = useNavigation();

    const validateFields = () => {
        let validationErrors = {};
        if (!name.trim()) {
            validationErrors.name = 'Name is required';
        } else if (name.length < 3) {
            validationErrors.name = 'Name must be at least 3 characters';
        }

        if (!email.trim()) {
            validationErrors.email = 'Email is required';
        }

        if (!password.trim()) {
            validationErrors.password = 'Password is required';
        } else if (password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    async function handleClick() {
        if (validateFields()) {
            setIsAuth(true);
            console.log('SignUp successful with:', { name, email, password });
            try {
                const res  = await createUser({ name, email, password });
                console.log("res",res);
                if(res.idToken){
                    authCtx.authenticate(res.idToken);
                }
                
              } catch (error) {
                Alert.alert('Authentication Failed!, Please Try again later!');
              }
            setIsAuth(false);
        }
    };
    if(isAuth){
        return <LoadingOverlay message="SignIn you in..." />;
    }

    return (
        <BgImage>
            <SafeAreaView style={GlobalStyles.container}>
                <Text style={GlobalStyles.welcomeText}>Welcome! Glad to see you</Text>
                <BlurView intensity={65} tint="dark" style={GlobalStyles.blurContainer}>
                    <View style={GlobalStyles.textInputContainer}>
                        <Ionicons name="person" size={24} color={Colors.color_6} style={GlobalStyles.icon} />
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="Please Enter your Name"
                            placeholderTextColor="#777"
                            onChangeText={setName}
                            value={name}
                        />
                    </View>
                    {errors.name && <Text style={GlobalStyles.errorText}>{errors.name}</Text>}

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
                    {errors.email && <Text style={GlobalStyles.errorText}>{errors.email}</Text>}

                    <View style={GlobalStyles.textInputContainer}>
                        <Ionicons name="lock-closed" size={24} color={Colors.color_6} style={GlobalStyles.icon} />
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder="Please Enter your Password"
                            placeholderTextColor="#777"
                            onChangeText={setPassword}
                            secureTextEntry
                            value={password}
                        />
                    </View>
                    {errors.password && <Text style={GlobalStyles.errorText}>{errors.password}</Text>}

                    <View style={GlobalStyles.button}>
                        <ButtonComponent onPress={handleClick} backgroundColor={Colors.color_1}>
                            Sign Up
                        </ButtonComponent>
                    </View>
                </BlurView>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", marginVertical: 30 }}>
                    <HorizentalLine borderwidth={1} width={'40%'} color={Colors.color_5} />
                    <Text style={{ marginHorizontal: 4, fontFamily: 'Sora_600SemiBold', color: Colors.color_4 }}>OR</Text>
                    <HorizentalLine borderwidth={1} width={'40%'} color={Colors.color_5} />
                </View>
                <View style={GlobalStyles.button}>
                    <GoogleAuth>SignUp With Google</GoogleAuth>
                </View>
                <Pressable style={{ marginTop: 40, paddingTop: 20, flexDirection: 'row' }} onPress={() => navigation.navigate("AuthScreen")}>
                    <Text style={[GlobalStyles.subText, { fontWeight: "bold" }]}>Already have an account?</Text>
                    <Text style={[GlobalStyles.subText, { fontWeight: "bold", color: Colors.color_1 }]}>Log In Now</Text>
                </Pressable>
            </SafeAreaView>
        </BgImage>
    );
};


export default SignInScreen;
