import { Text } from "react-native"

const UpdateProfileScreen = () =>{
    return <>
    <Text>Hello</Text>
    </>
}
export default UpdateProfileScreen;




// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import FlashScreen from "../Screens/FlashScreen";
// import LoginScreen from "../Screens/LoginScreen";
// import AuthScreen from "../Screens/AuthScreen";
// import SignInScreen from "../Screens/SignInScreen";
// import HomeScreen from "../Screens/HomeScreen";
// import { AuthContext } from "../store/auth-context";
// import { useContext } from "react";
// import IconButton from "../helper/IconButton";
// import Colors from "../helper/GlobalColors";
// import LoadingOverlay from "./LoadingOverlay";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import UpdateProfileScreen from "../Screens/UpdateProfileScreen";

// const BottomStack = createBottomTabNavigator(); 
// const Stack = createNativeStackNavigator();

// const MainNavigator = () => {
//   const authCtx = useContext(AuthContext);

//   function AuthStack() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="FlashScreen" component={FlashScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Loading" component={LoadingOverlay} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     );
//   }

//   function AuthenticatedStack() {
//     return (
//       <BottomStack.Navigator screenOptions={{
         
//           headerRight: ({ tintColor }) => (
//             <IconButton icon="exit" color={tintColor} size={24} onPress={authCtx.logout} />
//           ),
        
//         }}
//       >
//         <BottomStack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           userName = {authCtx.name}
//           options={{
//             headerStyle: { backgroundColor: Colors.color_6 },
//             headerTintColor: "white",
//             contentStyle: { backgroundColor: Colors.color_4 },
//             headerLeft: () => null, 
//             headerTitle: '',
            
//           }}
//         />
//          <BottomStack.Screen
//           name="UpdateProfileScreen"
//           component={UpdateProfileScreen}
//           userName = {authCtx.name}
//           options={{
//             headerLeft: () => null, 
//             headerTitle: 'Update Profile',
            
            
//           }}
//         />
//       </BottomStack.Navigator>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {!authCtx.isAuthenticated ? <AuthStack /> : <AuthenticatedStack />}
//     </NavigationContainer>
//   );
// };

// export default MainNavigator;
