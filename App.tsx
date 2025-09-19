import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';

import Cadastro from "./src/Screen/Cadastro";
import Login from "./src/Screen/Login";
import Home from "./src/Screen/Home";
import Recommendations from "./src/Screen/Recommendations";
import Portfolio from "./src/Screen/Portfolio";
import Profile from "./src/Screen/Profile";
import { RootStack } from "./src/types/index";

const Stack = createNativeStackNavigator<RootStack>();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#FFFFFF',
        drawerActiveTintColor: '#FFFFFF',
        drawerActiveBackgroundColor: '#333333',
        drawerInactiveTintColor: '#CCCCCC',
        drawerStyle: {
          backgroundColor: '#000000',
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Início' }}
      />
      <Drawer.Screen 
        name="Recommendations" 
        component={Recommendations} 
        options={{ title: 'Recomendações' }}
      />
      <Drawer.Screen 
        name="Portfolio" 
        component={Portfolio} 
        options={{ title: 'Meu Portfólio' }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={Profile} 
        options={{ title: 'Perfil' }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Menu" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;