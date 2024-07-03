import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

// Cria uma instância do createStackNavigator do React Navigation
const Stack = createStackNavigator();

// Define o componente funcional principal do aplicativo
function App() {
  return (
    <NavigationContainer>
      {/* Componente NavigationContainer envolve toda a navegação da aplicação */}
      <Stack.Navigator initialRouteName="Home">
        {/* Stack.Navigator gerencia a pilha de telas */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Define uma tela com nome "Home" e renderiza o componente HomeScreen */}
        <Stack.Screen name="Map" component={MapScreen} />
        {/* Define uma tela com nome "Map" e renderiza o componente MapScreen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// Exporta o componente App para ser usado como ponto de entrada da aplicação
