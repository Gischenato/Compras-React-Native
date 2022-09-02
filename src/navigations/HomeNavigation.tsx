import React from "react";
import { Text, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Produtor from "../screens/Produtor";
import Cesta from "../screens/Cesta";

export default () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Produtor" component={Produtor} />
                <Stack.Screen name="Cesta" component={Cesta} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}