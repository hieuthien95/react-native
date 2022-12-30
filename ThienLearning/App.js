import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/detail';
import CreatePostScreen from './screens/create-post';

const StackDemo = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackDemo.Navigator>
        <StackDemo.Screen name="Home" component={HomeScreen} />
        {/* 4. initialParams */}
        <StackDemo.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42, otherParam: "Initial otherParam" }} />
        <StackDemo.Screen name="CreatePost" component={CreatePostScreen} options={{title: "Tạo bài viết"}} />
      </StackDemo.Navigator>
    </NavigationContainer>
  );
}

export default App;