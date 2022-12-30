import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', 
            /* 1. Navigate to the Details route with params */
            {
              itemId: 86,
              otherParam: 'anything you want here',
            }
          );
        }}
      />

      <Text>{"\n"}</Text>
      
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      {/* 5. Passing params to a previous screen */}
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>

    </View>
  );
}

export default HomeScreen