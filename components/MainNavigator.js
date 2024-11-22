import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FlashScreen from "../Screens/FlashScreen";
import AuthScreen from "../Screens/AuthScreen";
import SignInScreen from "../Screens/SignInScreen";
import HomeScreen from "../Screens/HomeScreen";
import UpdateProfileScreen from "../Screens/UpdateProfileScreen";
import LoadingOverlay from "./LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import IconButton from "../helper/IconButton";
import Colors from "../helper/GlobalColors";
import { Ionicons } from '@expo/vector-icons';
import DetailsScreen from "../Screens/DetailsScreen";
import CheckOutScreen from "../Screens/CheckOutScreen";

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

  function BottomTabs() {
    return (
      <BottomStack.Navigator screenOptions={{ tabBarActiveTintColor: Colors.color_8 }}>
        <BottomStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: Colors.color_6 },
            headerLeft: () => null,
            headerTintColor: Colors.color_2,
            headerTitle: "",
            title: "Home",
            headerRight: ({ tintColor }) => (
              <IconButton icon="exit" color={tintColor} size={24} onPress={authCtx.logout} />
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomStack.Screen
          name="Profile"
          component={UpdateProfileScreen}
          options={{
            title: "Profile",
            headerTitleAlign: "center",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-sharp" color={color} size={size} />
            ),
          }}
        />
      </BottomStack.Navigator>
    );
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingOverlay}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            title: "Details",
            headerStyle: { backgroundColor: Colors.color_6 },
            headerTintColor: Colors.color_2,
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} options={{
            title: "Order",
            headerStyle: { backgroundColor: Colors.color_6 },
            headerTintColor: Colors.color_2,
            headerTitleAlign: 'center'

          }} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {/* <AuthenticatedStack></AuthenticatedStack> */}
      {authCtx.isLoading && <LoadingOverlay />}
      {!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;


