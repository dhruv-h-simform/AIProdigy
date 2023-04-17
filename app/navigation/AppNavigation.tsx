import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationRoutes } from '../constants';
import { LoginScreen, SplashScreen, TestingComponentScreen } from '../modules';
import { NavigationContainer } from './router';
import TabNavigation from './TabNavigation';
import { getLinkConfiguration } from './Linking';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer linking={getLinkConfiguration()}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={NavigationRoutes.SplashScreen}
          component={SplashScreen}
        />
        <Stack.Screen name={NavigationRoutes.Login} component={LoginScreen} />
        <Stack.Screen
          name={NavigationRoutes.TestingComponent}
          component={TestingComponentScreen}
        />
        <Stack.Screen
          name={NavigationRoutes.BottomTabs}
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
