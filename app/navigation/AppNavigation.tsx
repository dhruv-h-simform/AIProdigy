import { createStackNavigator } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { NavigationRoutes } from '../constants';
import { HomeScreen, DetailsScreen } from '../modules';
import { NavigationContainer } from './router';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: ['/'],
          config: {
            screens: {
              [NavigationRoutes.Home]: 'home',
              [NavigationRoutes.Details]: 'details',
            },
          },
        }),
        [],
      )}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NavigationRoutes.Home} component={HomeScreen} />
        <Stack.Screen
          name={NavigationRoutes.Details}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
