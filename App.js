import React, {useState} from 'react';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import RootStack from './src/screen/RootStack';
import LoginScreen from './src/screen/LoginScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Details" onPress={() => props.navigation.navigate("Details")} />
      <DrawerItem label="Notifications" onPress={() => props.navigation.navigate("Notifications")} />
    </DrawerContentScrollView>
  );
}

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    isLoggedIn ? (
      <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerType="slide"
        drawerStyle={{
          backgroundColor: '#fff',
          width: 240,
        }} 
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={RootStack}  
          options={{swipeEnabled: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    ) : (
      <LoginScreen />
    )

  )
}

export default App;