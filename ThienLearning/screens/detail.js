import * as React from 'react';
import { Button, View, Text } from 'react-native';

function DetailsScreen({ route, navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Navigate Details... again"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
            title="Push Details... again"
            onPress={() => navigation.push('Details')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
            title="Go back to first screen in stack"
            onPress={() => navigation.popToTop()}
        />

        {/* 2. Get the param */}
        <Text>
            {"\n"}itemId: {JSON.stringify(route.params?.itemId)}
            {"\n"}otherParam: {JSON.stringify(route.params?.otherParam)}
        </Text>
        
        {/* 3. Set random param */}
        <Button
            title="Set random param"
            onPress={() =>
                navigation.setParams({
                    itemId: Math.floor(Math.random() * 100),
                })
            }
        />

        <Button
            title="Navigate Details... random param"
            onPress={() =>
                navigation.push('Details', {
                    itemId: Math.floor(Math.random() * 100),
                })
            }
        />
        <Button
            title="Navigate Details... initial param"
            onPress={() => navigation.push('Details')}
        />

      </View>
    );
}

export default DetailsScreen