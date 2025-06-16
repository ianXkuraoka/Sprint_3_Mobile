import { NavigationContainer } from "@react-navigation/native";
import Cadastro from "./src/Screen/Cadastro";
import Login from "./src/Screen/Login";
import Welcome from "./src/Screen/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStack } from "./src/types/index";
import Recommendation from "./src/Screen/Recommendations";

const Stack = createNativeStackNavigator<RootStack>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recommendations" component={Recommendation} />
        <Stack.Screen name="Menu" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;