import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FlashScreen from "../Screens/FlashScreen";
import LoginScreen from "../Screens/LoginScreen";
import AuthScreen from "../Screens/AuthScreen";
import SignInScreen from "../Screens/SignInScreen";
import HomeScreen from "../Screens/HomeScreen";
import UpdateProfileScreen from "../Screens/UpdateProfileScreen";
import LoadingOverlay from "./LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import IconButton from "../helper/IconButton";
import Colors from "../helper/GlobalColors";
import Icon from "react-native-vector-icons/Ionicons"; // For Tab Icons

const BottomStack = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const authCtx = useContext(AuthContext);

  function AuthStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="FlashScreen"
          component={FlashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingOverlay}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function BottomNavi() {
    return (
      <BottomStack.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.color_6,
          tabBarInactiveTintColor: Colors.color_4,
          tabBarStyle: { backgroundColor: Colors.color_1 },
        }}
      >
        <BottomStack.Screen
          name="HomeBottomScreen"
          component={HomeScreen}
          options={{
            headerLeft: () => null,
            headerTitle: "",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            ),
            headerStyle: { backgroundColor: Colors.color_6 },
            headerTintColor: "white",
            contentStyle: { backgroundColor: Colors.color_4 },
          }}
        />
        <BottomStack.Screen
          name="ProfileBottomScreen"
          component={UpdateProfileScreen}
          options={{
            headerLeft: () => null,
            headerTitle: "",
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
            headerStyle: { backgroundColor: Colors.color_6 },
          }}
        />
      </BottomStack.Navigator>
    );
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.color_6 },
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.color_4 },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={BottomNavi}
          options={{
            headerLeft: () => null,
            headerTitle: "",
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="exit-outline"
                color={tintColor}
                size={24}
                onPress={authCtx.logout}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {authCtx.isLoading && <LoadingOverlay />} {/* Global Loading State */}
      {!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
