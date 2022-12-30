import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/detail';

const StackDemo = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackDemo.Navigator>
        <StackDemo.Screen name="Home" component={HomeScreen} />
        <StackDemo.Screen name="Details" component={DetailsScreen} />
      </StackDemo.Navigator>
    </NavigationContainer>
  );
}

export default App;