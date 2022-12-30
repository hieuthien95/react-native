// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const StackDemo = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackDemo.Navigator>
        <StackDemo.Screen name="Home" component={HomeScreen} />
      </StackDemo.Navigator>
    </NavigationContainer>
  );
}

export default App;