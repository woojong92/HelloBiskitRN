import React from "react";
import { View, Button} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

function NotificationScreen ({navigation}) {
  return (
    <View>
     <Button
      title="Go to Details... again"
      onPress={() => navigation.push('Details')}
     /> 
    </View>
  )
}

function DetailScreen ({navigation}) {
  return (
    <View>
     <Button
      title="Go to Details... again"
      onPress={() => navigation.push('Notifications')}
     /> 
    </View>
  )
}

export default function RootStack () {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Main" component={HomeScreen} options={{headerStyle: {height: 0}}}/>
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    )
  }