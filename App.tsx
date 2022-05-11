import AppContainer from "./src/components/app-container";
import MainScreen from "./src/screens/main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/about";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AppContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={MainScreen} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </AppContainer>
  );
}
